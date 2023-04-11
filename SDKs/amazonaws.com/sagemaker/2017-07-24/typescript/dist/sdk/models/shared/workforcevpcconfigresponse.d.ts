import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A VpcConfig object that specifies the VPC that you want your workforce to connect to.
 */
export declare class WorkforceVpcConfigResponse extends SpeakeasyBase {
    securityGroupIds: string[];
    subnets: string[];
    vpcEndpointId?: string;
    vpcId: string;
}
