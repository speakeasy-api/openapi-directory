import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointStatusEnum } from "./vpcendpointstatusenum";
/**
 * Details about an OpenSearch Serverless-managed interface endpoint.
 */
export declare class VpcEndpointDetail extends SpeakeasyBase {
    createdDate?: number;
    id?: string;
    name?: string;
    securityGroupIds?: string[];
    status?: VpcEndpointStatusEnum;
    subnetIds?: string[];
    vpcId?: string;
}
