import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the configuration information to connect to an Amazon VPC.
 */
export declare class DataSourceVpcConfiguration extends SpeakeasyBase {
    securityGroupIds: string[];
    subnetIds: string[];
}
