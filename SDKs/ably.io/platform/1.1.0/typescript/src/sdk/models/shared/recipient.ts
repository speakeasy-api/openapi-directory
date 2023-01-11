import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RecipientTransportTypeEnum {
    Apns = "apns",
    Fcm = "fcm",
    Gcm = "gcm"
}


// RecipientOutput
/** 
 * Push recipient details for a device.
**/
export class RecipientOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceToken" })
  deviceToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationToken" })
  registrationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transportType" })
  transportType?: RecipientTransportTypeEnum;
}


// Recipient
/** 
 * Push recipient details for a device.
**/
export class Recipient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId, form, name=clientId;" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId, form, name=deviceId;" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceToken, form, name=deviceToken;" })
  deviceToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationToken, form, name=registrationToken;" })
  registrationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transportType, form, name=transportType;" })
  transportType?: RecipientTransportTypeEnum;
}
