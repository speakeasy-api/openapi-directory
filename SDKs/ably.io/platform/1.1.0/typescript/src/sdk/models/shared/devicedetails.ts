import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecipientOutput } from "./recipient";
import { Recipient } from "./recipient";


export enum DeviceDetailsFormFactorEnum {
    Phone = "phone",
    Tablet = "tablet",
    Desktop = "desktop",
    Tv = "tv",
    Watch = "watch",
    Car = "car",
    Embedded = "embedded"
}

export enum DeviceDetailsPlatformEnum {
    Ios = "ios",
    Android = "android"
}

export enum DeviceDetailsPushStateEnum {
    Active = "Active",
    Failing = "Failing",
    Failed = "Failed"
}


export class DeviceDetailsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceSecret" })
  deviceSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=formFactor" })
  formFactor?: DeviceDetailsFormFactorEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: DeviceDetailsPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=push.recipient" })
  pushRecipient?: RecipientOutput;

  @SpeakeasyMetadata({ data: "json, name=push.state" })
  pushState?: DeviceDetailsPushStateEnum;
}


export class DeviceDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId, form, name=clientId;" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceSecret, form, name=deviceSecret;" })
  deviceSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=formFactor, form, name=formFactor;" })
  formFactor?: DeviceDetailsFormFactorEnum;

  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata, form, name=metadata;json=true" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=platform, form, name=platform;" })
  platform?: DeviceDetailsPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=push.recipient, form, name=push.recipient;" })
  pushRecipient?: Recipient;
}
