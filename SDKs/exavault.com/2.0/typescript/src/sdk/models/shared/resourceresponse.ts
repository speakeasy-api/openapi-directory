import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
import { User } from "./user";
import { Account } from "./account";
import { Notification } from "./notification";
import { Share } from "./share";



// ResourceResponse
/** 
 * Response object for resources.
**/
export class ResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Resource;

  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: any[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
