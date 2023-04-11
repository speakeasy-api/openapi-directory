import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC object you use to create or update a workforce.
 */
export declare class WorkforceVpcConfigRequest extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnets?: string[];
    vpcId?: string;
}
