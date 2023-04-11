import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Contains the parameters for DescribeInstanceHealth.
 */
export declare class DescribeEndPointStateInput extends SpeakeasyBase {
    instances?: Instance[];
    loadBalancerName: string;
}
