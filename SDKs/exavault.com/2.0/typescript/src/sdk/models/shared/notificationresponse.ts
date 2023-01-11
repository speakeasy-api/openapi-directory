import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { Share } from "./share";
import { User } from "./user";
import { Resource } from "./resource";



// NotificationResponse
/** 
 * Response object for notifications.
**/
export class NotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Notification;

  @SpeakeasyMetadata({ data: "json, name=included" })
  included?: any[];

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: number;
}
