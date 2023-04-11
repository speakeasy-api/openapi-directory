import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRegexPatternSetXAmzTargetEnum {
    AWSWAFRegional20161128GetRegexPatternSet = "AWSWAF_Regional_20161128.GetRegexPatternSet"
}
export declare class GetRegexPatternSetRequest extends SpeakeasyBase {
    getRegexPatternSetRequest: shared.GetRegexPatternSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegexPatternSetXAmzTargetEnum;
}
export declare class GetRegexPatternSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRegexPatternSetResponse?: shared.GetRegexPatternSetResponse;
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
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
