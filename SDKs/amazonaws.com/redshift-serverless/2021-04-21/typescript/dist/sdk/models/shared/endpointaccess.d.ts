import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
/**
 * Information about an Amazon Redshift Serverless VPC endpoint.
 */
export declare class EndpointAccess extends SpeakeasyBase {
    address?: string;
    endpointArn?: string;
    endpointCreateTime?: Date;
    endpointName?: string;
    endpointStatus?: string;
    port?: number;
    subnetIds?: string[];
    vpcEndpoint?: VpcEndpoint;
    vpcSecurityGroups?: VpcSecurityGroupMembership[];
    workgroupName?: string;
}
