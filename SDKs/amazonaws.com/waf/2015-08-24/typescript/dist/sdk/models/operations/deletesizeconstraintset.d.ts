import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSizeConstraintSetXAmzTargetEnum {
    AWSWAF20150824DeleteSizeConstraintSet = "AWSWAF_20150824.DeleteSizeConstraintSet"
}
export declare class DeleteSizeConstraintSetRequest extends SpeakeasyBase {
    deleteSizeConstraintSetRequest: shared.DeleteSizeConstraintSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSizeConstraintSetXAmzTargetEnum;
}
export declare class DeleteSizeConstraintSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSizeConstraintSetResponse?: shared.DeleteSizeConstraintSetResponse;
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
