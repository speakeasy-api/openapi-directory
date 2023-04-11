import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSqlInjectionMatchSetXAmzTargetEnum {
    AWSWAFRegional20161128CreateSqlInjectionMatchSet = "AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet"
}
export declare class CreateSqlInjectionMatchSetRequest extends SpeakeasyBase {
    createSqlInjectionMatchSetRequest: shared.CreateSqlInjectionMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSqlInjectionMatchSetXAmzTargetEnum;
}
export declare class CreateSqlInjectionMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSqlInjectionMatchSetResponse?: shared.CreateSqlInjectionMatchSetResponse;
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
