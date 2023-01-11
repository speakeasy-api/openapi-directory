import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
**/
export declare class PushApns extends SpeakeasyBase {
    notification?: Notification;
}
/**
 * Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
**/
export declare class PushFcm extends SpeakeasyBase {
    notification?: Notification;
}
/**
 * Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
**/
export declare class PushWeb extends SpeakeasyBase {
    notification?: Notification;
}
export declare class Push extends SpeakeasyBase {
    apns?: PushApns;
    data?: string;
    fcm?: PushFcm;
    notification?: Notification;
    web?: PushWeb;
}
