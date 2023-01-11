import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Share } from "./share";
import { User } from "./user";
import { Notification } from "./notification";
import { Resource } from "./resource";



// ShareResponse
/** 
 * Response object for shares.
**/
export class ShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Share;

  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: any[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
