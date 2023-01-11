import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SharedLinkTarget } from "./sharedlinktarget";


export enum SharedLinkScopeEnum {
    Public = "public",
    Company = "company"
}


export class SharedLinkOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=password_protected" })
  passwordProtected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: SharedLinkScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: SharedLinkTarget;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class SharedLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: SharedLinkScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=target_id" })
  targetId: string;
}
