import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeQuerySuggestionsBlockListXAmzTargetEnum {
    AWSKendraFrontendServiceDescribeQuerySuggestionsBlockList = "AWSKendraFrontendService.DescribeQuerySuggestionsBlockList"
}
export declare class DescribeQuerySuggestionsBlockListRequest extends SpeakeasyBase {
    describeQuerySuggestionsBlockListRequest: shared.DescribeQuerySuggestionsBlockListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeQuerySuggestionsBlockListXAmzTargetEnum;
}
export declare class DescribeQuerySuggestionsBlockListResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeQuerySuggestionsBlockListResponse?: shared.DescribeQuerySuggestionsBlockListResponse;
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
