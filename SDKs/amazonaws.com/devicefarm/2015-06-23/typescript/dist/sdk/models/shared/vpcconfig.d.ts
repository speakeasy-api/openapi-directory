import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the VPC configuration data necessary to interface with AWS Device Farm's services.
 */
export declare class VpcConfig extends SpeakeasyBase {
    securityGroupIds: string[];
    subnetIds: string[];
    vpcId: string;
}
