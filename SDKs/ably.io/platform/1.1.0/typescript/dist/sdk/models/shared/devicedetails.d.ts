import { SpeakeasyBase } from "../../../internal/utils";
import { RecipientOutput } from "./recipient";
import { Recipient } from "./recipient";
export declare enum DeviceDetailsFormFactorEnum {
    Phone = "phone",
    Tablet = "tablet",
    Desktop = "desktop",
    Tv = "tv",
    Watch = "watch",
    Car = "car",
    Embedded = "embedded"
}
export declare enum DeviceDetailsPlatformEnum {
    Ios = "ios",
    Android = "android"
}
export declare enum DeviceDetailsPushStateEnum {
    Active = "Active",
    Failing = "Failing",
    Failed = "Failed"
}
export declare class DeviceDetailsOutput extends SpeakeasyBase {
    clientId?: string;
    deviceSecret?: string;
    formFactor?: DeviceDetailsFormFactorEnum;
    id?: string;
    metadata?: Record<string, any>;
    platform?: DeviceDetailsPlatformEnum;
    pushRecipient?: RecipientOutput;
    pushState?: DeviceDetailsPushStateEnum;
}
export declare class DeviceDetailsInput extends SpeakeasyBase {
    clientId?: string;
    deviceSecret?: string;
    formFactor?: DeviceDetailsFormFactorEnum;
    id?: string;
    metadata?: Record<string, any>;
    platform?: DeviceDetailsPlatformEnum;
    pushRecipient?: Recipient;
}
