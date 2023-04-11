import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The network configuration for customer VPC connectivity.
 */
export declare class NetworkConfiguration extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
