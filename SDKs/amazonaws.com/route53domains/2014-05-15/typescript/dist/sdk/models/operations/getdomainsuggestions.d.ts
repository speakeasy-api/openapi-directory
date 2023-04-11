import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDomainSuggestionsXAmzTargetEnum {
    Route53DomainsV20140515GetDomainSuggestions = "Route53Domains_v20140515.GetDomainSuggestions"
}
export declare class GetDomainSuggestionsRequest extends SpeakeasyBase {
    getDomainSuggestionsRequest: shared.GetDomainSuggestionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDomainSuggestionsXAmzTargetEnum;
}
export declare class GetDomainSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDomainSuggestionsResponse?: shared.GetDomainSuggestionsResponse;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedTLD
     */
    unsupportedTLD?: any;
}
