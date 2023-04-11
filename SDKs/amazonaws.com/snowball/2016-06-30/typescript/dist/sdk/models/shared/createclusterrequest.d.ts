import { SpeakeasyBase } from "../../../internal/utils";
import { JobResource } from "./jobresource";
import { JobTypeEnum } from "./jobtypeenum";
import { Notification } from "./notification";
import { OnDeviceServiceConfiguration } from "./ondeviceserviceconfiguration";
import { RemoteManagementEnum } from "./remotemanagementenum";
import { ShippingOptionEnum } from "./shippingoptionenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
import { TaxDocuments } from "./taxdocuments";
export declare class CreateClusterRequest extends SpeakeasyBase {
    addressId: string;
    description?: string;
    forwardingAddressId?: string;
    jobType: JobTypeEnum;
    kmsKeyARN?: string;
    notification?: Notification;
    onDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
    remoteManagement?: RemoteManagementEnum;
    resources: JobResource;
    roleARN: string;
    shippingOption: ShippingOptionEnum;
    snowballType: SnowballTypeEnum;
    taxDocuments?: TaxDocuments;
}
