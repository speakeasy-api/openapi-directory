import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateXssMatchSetXAmzTargetEnum {
    AWSWAFRegional20161128CreateXssMatchSet = "AWSWAF_Regional_20161128.CreateXssMatchSet"
}
export declare class CreateXssMatchSetRequest extends SpeakeasyBase {
    createXssMatchSetRequest: shared.CreateXssMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateXssMatchSetXAmzTargetEnum;
}
export declare class CreateXssMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createXssMatchSetResponse?: shared.CreateXssMatchSetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
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
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFLimitsExceededException
     */
    wafLimitsExceededException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
