import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDescribeSimulationJobRequestBody extends SpeakeasyBase {
    /**
     * A list of Amazon Resource Names (ARNs) of simulation jobs to describe.
     */
    jobs: string[];
}
export declare class BatchDescribeSimulationJobRequest extends SpeakeasyBase {
    requestBody: BatchDescribeSimulationJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDescribeSimulationJobResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDescribeSimulationJobResponse?: shared.BatchDescribeSimulationJobResponse;
    contentType: string;
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
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
