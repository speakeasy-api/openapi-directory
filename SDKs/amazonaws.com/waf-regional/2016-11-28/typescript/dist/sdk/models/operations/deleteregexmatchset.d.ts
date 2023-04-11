import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRegexMatchSetXAmzTargetEnum {
    AWSWAFRegional20161128DeleteRegexMatchSet = "AWSWAF_Regional_20161128.DeleteRegexMatchSet"
}
export declare class DeleteRegexMatchSetRequest extends SpeakeasyBase {
    deleteRegexMatchSetRequest: shared.DeleteRegexMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRegexMatchSetXAmzTargetEnum;
}
export declare class DeleteRegexMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRegexMatchSetResponse?: shared.DeleteRegexMatchSetResponse;
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
