import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteByteMatchSetXAmzTargetEnum {
    AWSWAF20150824DeleteByteMatchSet = "AWSWAF_20150824.DeleteByteMatchSet"
}
export declare class DeleteByteMatchSetRequest extends SpeakeasyBase {
    deleteByteMatchSetRequest: shared.DeleteByteMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteByteMatchSetXAmzTargetEnum;
}
export declare class DeleteByteMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteByteMatchSetResponse?: shared.DeleteByteMatchSetResponse;
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
