import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRegexMatchSetsXAmzTargetEnum {
    AWSWAFRegional20161128ListRegexMatchSets = "AWSWAF_Regional_20161128.ListRegexMatchSets"
}
export declare class ListRegexMatchSetsRequest extends SpeakeasyBase {
    listRegexMatchSetsRequest: shared.ListRegexMatchSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRegexMatchSetsXAmzTargetEnum;
}
export declare class ListRegexMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listRegexMatchSetsResponse?: shared.ListRegexMatchSetsResponse;
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
