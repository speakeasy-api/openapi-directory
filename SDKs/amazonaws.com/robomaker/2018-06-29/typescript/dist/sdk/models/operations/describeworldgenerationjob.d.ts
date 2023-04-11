import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeWorldGenerationJobRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (arn) of the world generation job to describe.
     */
    job: string;
}
export declare class DescribeWorldGenerationJobRequest extends SpeakeasyBase {
    requestBody: DescribeWorldGenerationJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorldGenerationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorldGenerationJobResponse?: shared.DescribeWorldGenerationJobResponse;
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
