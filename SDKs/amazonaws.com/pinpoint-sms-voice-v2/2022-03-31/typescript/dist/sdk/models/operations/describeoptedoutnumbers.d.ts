import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOptedOutNumbersXAmzTargetEnum {
    PinpointSMSVoiceV2DescribeOptedOutNumbers = "PinpointSMSVoiceV2.DescribeOptedOutNumbers"
}
export declare class DescribeOptedOutNumbersRequest extends SpeakeasyBase {
    describeOptedOutNumbersRequest: shared.DescribeOptedOutNumbersRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOptedOutNumbersXAmzTargetEnum;
}
export declare class DescribeOptedOutNumbersResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeOptedOutNumbersResult?: shared.DescribeOptedOutNumbersResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
