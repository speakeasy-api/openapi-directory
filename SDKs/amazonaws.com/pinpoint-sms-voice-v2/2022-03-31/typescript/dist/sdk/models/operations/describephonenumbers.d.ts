import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePhoneNumbersXAmzTargetEnum {
    PinpointSMSVoiceV2DescribePhoneNumbers = "PinpointSMSVoiceV2.DescribePhoneNumbers"
}
export declare class DescribePhoneNumbersRequest extends SpeakeasyBase {
    describePhoneNumbersRequest: shared.DescribePhoneNumbersRequest;
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
    xAmzTarget: DescribePhoneNumbersXAmzTargetEnum;
}
export declare class DescribePhoneNumbersResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describePhoneNumbersResult?: shared.DescribePhoneNumbersResult;
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
