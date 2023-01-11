import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrivateLinkCreator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires_date" })
  expiresDate?: string;
}
