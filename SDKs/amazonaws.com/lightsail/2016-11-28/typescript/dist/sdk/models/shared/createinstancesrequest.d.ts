import { SpeakeasyBase } from "../../../internal/utils";
import { AddOnRequest } from "./addonrequest";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";
export declare class CreateInstancesRequest extends SpeakeasyBase {
    addOns?: AddOnRequest[];
    availabilityZone: string;
    blueprintId: string;
    bundleId: string;
    customImageName?: Record<string, any>;
    instanceNames: string[];
    ipAddressType?: IpAddressTypeEnum;
    keyPairName?: string;
    tags?: Tag[];
    userData?: string;
}
