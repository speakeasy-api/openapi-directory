import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeResourceRequestBody extends SpeakeasyBase {
    /**
     * The resource ARN.
     */
    resourceArn: string;
}
export declare class DescribeResourceRequest extends SpeakeasyBase {
    requestBody: DescribeResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeResourceResponse?: shared.DescribeResourceResponse;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
