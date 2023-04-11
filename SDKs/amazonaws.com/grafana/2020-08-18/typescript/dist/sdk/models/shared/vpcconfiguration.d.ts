import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.</p> <note> <p>Provided <code>securityGroupIds</code> and <code>subnetIds</code> must be part of the same VPC.</p> </note>
 */
export declare class VpcConfiguration extends SpeakeasyBase {
    securityGroupIds: string[];
    subnetIds: string[];
}
