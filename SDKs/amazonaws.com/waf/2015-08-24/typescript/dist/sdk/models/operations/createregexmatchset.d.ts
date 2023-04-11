import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRegexMatchSetXAmzTargetEnum {
    AWSWAF20150824CreateRegexMatchSet = "AWSWAF_20150824.CreateRegexMatchSet"
}
export declare class CreateRegexMatchSetRequest extends SpeakeasyBase {
    createRegexMatchSetRequest: shared.CreateRegexMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRegexMatchSetXAmzTargetEnum;
}
export declare class CreateRegexMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRegexMatchSetResponse?: shared.CreateRegexMatchSetResponse;
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
     * WAFLimitsExceededException
     */
    wafLimitsExceededException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
