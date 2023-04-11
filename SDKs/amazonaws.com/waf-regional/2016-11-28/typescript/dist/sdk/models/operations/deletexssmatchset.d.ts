import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteXssMatchSetXAmzTargetEnum {
    AWSWAFRegional20161128DeleteXssMatchSet = "AWSWAF_Regional_20161128.DeleteXssMatchSet"
}
export declare class DeleteXssMatchSetRequest extends SpeakeasyBase {
    deleteXssMatchSetRequest: shared.DeleteXssMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteXssMatchSetXAmzTargetEnum;
}
export declare class DeleteXssMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteXssMatchSetResponse?: shared.DeleteXssMatchSetResponse;
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
