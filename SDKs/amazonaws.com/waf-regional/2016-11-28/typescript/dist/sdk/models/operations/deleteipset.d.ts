import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteIPSetXAmzTargetEnum {
    AWSWAFRegional20161128DeleteIPSet = "AWSWAF_Regional_20161128.DeleteIPSet"
}
export declare class DeleteIPSetRequest extends SpeakeasyBase {
    deleteIPSetRequest: shared.DeleteIPSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteIPSetXAmzTargetEnum;
}
export declare class DeleteIPSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteIPSetResponse?: shared.DeleteIPSetResponse;
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
