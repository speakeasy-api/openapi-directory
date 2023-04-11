import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines which push platform is being used.
 */
export declare enum RecipientTransportTypeEnum {
    Apns = "apns",
    Fcm = "fcm",
    Gcm = "gcm"
}
/**
 * Push recipient details for a device.
 */
export declare class RecipientOutput extends SpeakeasyBase {
    /**
     * when using APNs, specifies the required device token.
     */
    deviceToken?: string;
    /**
     * when using GCM or FCM, specifies the required registration token.
     */
    registrationToken?: string;
    /**
     * Defines which push platform is being used.
     */
    transportType?: RecipientTransportTypeEnum;
}
/**
 * Push recipient details for a device.
 */
export declare class Recipient extends SpeakeasyBase {
    /**
     * Client ID of recipient
     */
    clientId?: string;
    /**
     * Client ID of recipient
     */
    deviceId?: string;
    /**
     * when using APNs, specifies the required device token.
     */
    deviceToken?: string;
    /**
     * when using GCM or FCM, specifies the required registration token.
     */
    registrationToken?: string;
    /**
     * Defines which push platform is being used.
     */
    transportType?: RecipientTransportTypeEnum;
}
