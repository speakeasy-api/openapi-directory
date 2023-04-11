import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeWorldExportJobRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (arn) of the world export job to describe.
     */
    job: string;
}
export declare class DescribeWorldExportJobRequest extends SpeakeasyBase {
    requestBody: DescribeWorldExportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorldExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorldExportJobResponse?: shared.DescribeWorldExportJobResponse;
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
