import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeSimulationJobRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the simulation job to be described.
     */
    job: string;
}
export declare class DescribeSimulationJobRequest extends SpeakeasyBase {
    requestBody: DescribeSimulationJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSimulationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSimulationJobResponse?: shared.DescribeSimulationJobResponse;
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
