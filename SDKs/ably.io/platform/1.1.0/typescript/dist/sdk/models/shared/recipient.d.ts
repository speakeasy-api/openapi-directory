import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RecipientTransportTypeEnum {
    Apns = "apns",
    Fcm = "fcm",
    Gcm = "gcm"
}
/**
 * Push recipient details for a device.
**/
export declare class RecipientOutput extends SpeakeasyBase {
    deviceToken?: string;
    registrationToken?: string;
    transportType?: RecipientTransportTypeEnum;
}
/**
 * Push recipient details for a device.
**/
export declare class Recipient extends SpeakeasyBase {
    clientId?: string;
    deviceId?: string;
    deviceToken?: string;
    registrationToken?: string;
    transportType?: RecipientTransportTypeEnum;
}
