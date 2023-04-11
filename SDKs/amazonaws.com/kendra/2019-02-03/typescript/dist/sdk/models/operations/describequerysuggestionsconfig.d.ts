import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeQuerySuggestionsConfigXAmzTargetEnum {
    AWSKendraFrontendServiceDescribeQuerySuggestionsConfig = "AWSKendraFrontendService.DescribeQuerySuggestionsConfig"
}
export declare class DescribeQuerySuggestionsConfigRequest extends SpeakeasyBase {
    describeQuerySuggestionsConfigRequest: shared.DescribeQuerySuggestionsConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeQuerySuggestionsConfigXAmzTargetEnum;
}
export declare class DescribeQuerySuggestionsConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeQuerySuggestionsConfigResponse?: shared.DescribeQuerySuggestionsConfigResponse;
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
