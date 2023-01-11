import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionPrivateLinkCreator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires_date" })
  expiresDate?: string;

  @SpeakeasyMetadata({ data: "json, name=read_only" })
  readOnly?: boolean;
}
