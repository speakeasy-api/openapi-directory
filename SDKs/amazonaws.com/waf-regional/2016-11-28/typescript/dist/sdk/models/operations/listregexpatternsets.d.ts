import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRegexPatternSetsXAmzTargetEnum {
    AWSWAFRegional20161128ListRegexPatternSets = "AWSWAF_Regional_20161128.ListRegexPatternSets"
}
export declare class ListRegexPatternSetsRequest extends SpeakeasyBase {
    listRegexPatternSetsRequest: shared.ListRegexPatternSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRegexPatternSetsXAmzTargetEnum;
}
export declare class ListRegexPatternSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listRegexPatternSetsResponse?: shared.ListRegexPatternSetsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidAccountException
     */
    wafInvalidAccountException?: any;
}
