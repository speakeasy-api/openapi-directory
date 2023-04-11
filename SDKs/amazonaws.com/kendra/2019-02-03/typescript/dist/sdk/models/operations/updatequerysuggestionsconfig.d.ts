import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateQuerySuggestionsConfigXAmzTargetEnum {
    AWSKendraFrontendServiceUpdateQuerySuggestionsConfig = "AWSKendraFrontendService.UpdateQuerySuggestionsConfig"
}
export declare class UpdateQuerySuggestionsConfigRequest extends SpeakeasyBase {
    updateQuerySuggestionsConfigRequest: shared.UpdateQuerySuggestionsConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateQuerySuggestionsConfigXAmzTargetEnum;
}
export declare class UpdateQuerySuggestionsConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
