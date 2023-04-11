import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSqlInjectionMatchSetXAmzTargetEnum {
    AWSWAFRegional20161128DeleteSqlInjectionMatchSet = "AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet"
}
export declare class DeleteSqlInjectionMatchSetRequest extends SpeakeasyBase {
    deleteSqlInjectionMatchSetRequest: shared.DeleteSqlInjectionMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSqlInjectionMatchSetXAmzTargetEnum;
}
export declare class DeleteSqlInjectionMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSqlInjectionMatchSetResponse?: shared.DeleteSqlInjectionMatchSetResponse;
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
     * WAFNonEmptyEntityException
     */
    wafNonEmptyEntityException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
    /**
     * WAFReferencedItemException
     */
    wafReferencedItemException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
