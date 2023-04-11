import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSqlInjectionMatchSetXAmzTargetEnum {
    AWSWAFRegional20161128GetSqlInjectionMatchSet = "AWSWAF_Regional_20161128.GetSqlInjectionMatchSet"
}
export declare class GetSqlInjectionMatchSetRequest extends SpeakeasyBase {
    getSqlInjectionMatchSetRequest: shared.GetSqlInjectionMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSqlInjectionMatchSetXAmzTargetEnum;
}
export declare class GetSqlInjectionMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSqlInjectionMatchSetResponse?: shared.GetSqlInjectionMatchSetResponse;
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
