import { SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";
import { Tag } from "./tag";
/**
 * Contains the parameters for CreateLoadBalancer.
 */
export declare class CreateAccessPointInput extends SpeakeasyBase {
    availabilityZones?: string[];
    listeners: Listener[];
    loadBalancerName: string;
    scheme?: string;
    securityGroups?: string[];
    subnets?: string[];
    tags?: Tag[];
}
