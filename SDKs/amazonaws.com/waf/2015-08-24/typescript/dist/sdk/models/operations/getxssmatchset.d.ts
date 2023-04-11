import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetXssMatchSetXAmzTargetEnum {
    AWSWAF20150824GetXssMatchSet = "AWSWAF_20150824.GetXssMatchSet"
}
export declare class GetXssMatchSetRequest extends SpeakeasyBase {
    getXssMatchSetRequest: shared.GetXssMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetXssMatchSetXAmzTargetEnum;
}
export declare class GetXssMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getXssMatchSetResponse?: shared.GetXssMatchSetResponse;
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
