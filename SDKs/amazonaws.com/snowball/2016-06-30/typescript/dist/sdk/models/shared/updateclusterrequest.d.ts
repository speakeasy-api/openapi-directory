import { SpeakeasyBase } from "../../../internal/utils";
import { JobResource } from "./jobresource";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { ShippingOptionEnum } from "./shippingoptionenum";
export declare class UpdateClusterRequest extends SpeakeasyBase {
    addressId?: string;
    clusterId: string;
    description?: string;
    forwardingAddressId?: string;
    notification?: Notification;
    onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
    resources?: JobResource;
    roleARN?: string;
    shippingOption?: ShippingOptionEnum;
}
