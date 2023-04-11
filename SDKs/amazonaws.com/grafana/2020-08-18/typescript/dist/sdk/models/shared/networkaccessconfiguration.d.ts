import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The configuration settings for in-bound network access to your workspace.</p> <p>When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization will still be required.</p> <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.</p>
 */
export declare class NetworkAccessConfiguration extends SpeakeasyBase {
    prefixListIds: string[];
    vpceIds: string[];
}
