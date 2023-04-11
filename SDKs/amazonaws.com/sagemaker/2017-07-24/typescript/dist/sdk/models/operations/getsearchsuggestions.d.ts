import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSearchSuggestionsXAmzTargetEnum {
    SageMakerGetSearchSuggestions = "SageMaker.GetSearchSuggestions"
}
export declare class GetSearchSuggestionsRequest extends SpeakeasyBase {
    getSearchSuggestionsRequest: shared.GetSearchSuggestionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSearchSuggestionsXAmzTargetEnum;
}
export declare class GetSearchSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSearchSuggestionsResponse?: shared.GetSearchSuggestionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
