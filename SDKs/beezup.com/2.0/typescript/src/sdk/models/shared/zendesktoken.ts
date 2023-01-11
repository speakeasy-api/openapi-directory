import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZendeskToken
/** 
 * JWT token to access Zendesk restricted help center
**/
export class ZendeskToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
