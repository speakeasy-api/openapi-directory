import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorEvent } from "./acceleratorevent";
import { AcceleratorStatusEnum } from "./acceleratorstatusenum";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { IpSet } from "./ipset";
/**
 * An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.
 */
export declare class Accelerator extends SpeakeasyBase {
    acceleratorArn?: string;
    createdTime?: Date;
    dnsName?: string;
    dualStackDnsName?: string;
    enabled?: boolean;
    events?: AcceleratorEvent[];
    ipAddressType?: IpAddressTypeEnum;
    ipSets?: IpSet[];
    lastModifiedTime?: Date;
    name?: string;
    status?: AcceleratorStatusEnum;
}
