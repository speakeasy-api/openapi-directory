import { SpeakeasyBase } from "../../../internal/utils";
import { JobResource } from "./jobresource";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { ShippingOptionEnum } from "./shippingoptionenum";
import { SnowballCapacityEnum } from "./snowballcapacityenum";
export declare class UpdateJobRequest extends SpeakeasyBase {
    addressId?: string;
    description?: string;
    forwardingAddressId?: string;
    jobId: string;
    notification?: Notification;
    onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
    resources?: JobResource;
    roleARN?: string;
    shippingOption?: ShippingOptionEnum;
    snowballCapacityPreference?: SnowballCapacityEnum;
}
