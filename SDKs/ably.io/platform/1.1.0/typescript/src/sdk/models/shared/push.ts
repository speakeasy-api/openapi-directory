import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";



// PushApns
/** 
 * Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
**/
export class PushApns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: Notification;
}


// PushFcm
/** 
 * Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
**/
export class PushFcm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: Notification;
}


// PushWeb
/** 
 * Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
**/
export class PushWeb extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: Notification;
}


export class Push extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apns" })
  apns?: PushApns;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=fcm" })
  fcm?: PushFcm;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: Notification;

  @SpeakeasyMetadata({ data: "json, name=web" })
  web?: PushWeb;
}
