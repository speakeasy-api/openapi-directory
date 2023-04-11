import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointStatusEnum } from "./vpcendpointstatusenum";
/**
 * Deletion details for an OpenSearch Serverless-managed interface endpoint.
 */
export declare class DeleteVpcEndpointDetail extends SpeakeasyBase {
    id?: string;
    name?: string;
    status?: VpcEndpointStatusEnum;
}
