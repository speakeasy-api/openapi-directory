import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateXssMatchSetXAmzTargetEnum {
    AWSWAFRegional20161128UpdateXssMatchSet = "AWSWAF_Regional_20161128.UpdateXssMatchSet"
}
export declare class UpdateXssMatchSetRequest extends SpeakeasyBase {
    updateXssMatchSetRequest: shared.UpdateXssMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateXssMatchSetXAmzTargetEnum;
}
export declare class UpdateXssMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateXssMatchSetResponse?: shared.UpdateXssMatchSetResponse;
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
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
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
