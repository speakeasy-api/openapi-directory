import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeSimulationJobBatchRequestBody extends SpeakeasyBase {
    /**
     * The id of the batch to describe.
     */
    batch: string;
}
export declare class DescribeSimulationJobBatchRequest extends SpeakeasyBase {
    requestBody: DescribeSimulationJobBatchRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSimulationJobBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSimulationJobBatchResponse?: shared.DescribeSimulationJobBatchResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
