import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRegexMatchSetXAmzTargetEnum {
    AWSWAF20150824GetRegexMatchSet = "AWSWAF_20150824.GetRegexMatchSet"
}
export declare class GetRegexMatchSetRequest extends SpeakeasyBase {
    getRegexMatchSetRequest: shared.GetRegexMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegexMatchSetXAmzTargetEnum;
}
export declare class GetRegexMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRegexMatchSetResponse?: shared.GetRegexMatchSetResponse;
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
