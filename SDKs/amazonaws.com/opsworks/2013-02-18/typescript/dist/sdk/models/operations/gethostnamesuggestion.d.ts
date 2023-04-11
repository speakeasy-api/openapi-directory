import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetHostnameSuggestionXAmzTargetEnum {
    OpsWorks20130218GetHostnameSuggestion = "OpsWorks_20130218.GetHostnameSuggestion"
}
export declare class GetHostnameSuggestionRequest extends SpeakeasyBase {
    getHostnameSuggestionRequest: shared.GetHostnameSuggestionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetHostnameSuggestionXAmzTargetEnum;
}
export declare class GetHostnameSuggestionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getHostnameSuggestionResult?: shared.GetHostnameSuggestionResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
