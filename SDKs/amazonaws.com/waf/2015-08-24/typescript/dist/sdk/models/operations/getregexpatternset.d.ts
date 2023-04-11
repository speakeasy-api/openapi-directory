import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRegexPatternSetXAmzTargetEnum {
    AWSWAF20150824GetRegexPatternSet = "AWSWAF_20150824.GetRegexPatternSet"
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
