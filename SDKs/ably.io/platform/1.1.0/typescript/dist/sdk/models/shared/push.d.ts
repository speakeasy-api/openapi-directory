import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
 */
export declare class PushApns extends SpeakeasyBase {
    notification?: Notification;
}
/**
 * Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
 */
export declare class PushFcm extends SpeakeasyBase {
    notification?: Notification;
}
/**
 * Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
 */
export declare class PushWeb extends SpeakeasyBase {
    notification?: Notification;
}
export declare class Push extends SpeakeasyBase {
    /**
     * Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    apns?: PushApns;
    /**
     * Arbitrary [key-value string-to-string payload](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example).
     */
    data?: string;
    /**
     * Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    fcm?: PushFcm;
    notification?: Notification;
    /**
     * Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
     */
    web?: PushWeb;
}
