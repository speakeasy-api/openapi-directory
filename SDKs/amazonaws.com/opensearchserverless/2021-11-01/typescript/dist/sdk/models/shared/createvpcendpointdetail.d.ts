import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointStatusEnum } from "./vpcendpointstatusenum";
/**
 * Creation details for an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
 */
export declare class CreateVpcEndpointDetail extends SpeakeasyBase {
    id?: string;
    name?: string;
    status?: VpcEndpointStatusEnum;
}
