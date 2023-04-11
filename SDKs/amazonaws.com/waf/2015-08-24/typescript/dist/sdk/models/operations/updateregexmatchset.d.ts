import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRegexMatchSetXAmzTargetEnum {
    AWSWAF20150824UpdateRegexMatchSet = "AWSWAF_20150824.UpdateRegexMatchSet"
}
export declare class UpdateRegexMatchSetRequest extends SpeakeasyBase {
    updateRegexMatchSetRequest: shared.UpdateRegexMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRegexMatchSetXAmzTargetEnum;
}
export declare class UpdateRegexMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateRegexMatchSetResponse?: shared.UpdateRegexMatchSetResponse;
    /**
     * WAFDisallowedNameException
     */
    wafDisallowedNameException?: any;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidAccountException
     */
    wafInvalidAccountException?: any;
    /**
     * WAFInvalidOperationException
     */
    wafInvalidOperationException?: any;
    /**
     * WAFLimitsExceededException
     */
    wafLimitsExceededException?: any;
    /**
     * WAFNonexistentContainerException
     */
    wafNonexistentContainerException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
