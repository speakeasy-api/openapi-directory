import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointStatusEnum } from "./vpcendpointstatusenum";
/**
 * Update details for an OpenSearch Serverless-managed interface endpoint.
 */
export declare class UpdateVpcEndpointDetail extends SpeakeasyBase {
    id?: string;
    lastModifiedDate?: number;
    name?: string;
    securityGroupIds?: string[];
    status?: VpcEndpointStatusEnum;
    subnetIds?: string[];
}
