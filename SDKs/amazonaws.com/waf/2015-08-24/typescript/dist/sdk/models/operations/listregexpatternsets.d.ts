import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRegexPatternSetsXAmzTargetEnum {
    AWSWAF20150824ListRegexPatternSets = "AWSWAF_20150824.ListRegexPatternSets"
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
