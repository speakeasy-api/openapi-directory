import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSizeConstraintSetXAmzTargetEnum {
    AWSWAFRegional20161128UpdateSizeConstraintSet = "AWSWAF_Regional_20161128.UpdateSizeConstraintSet"
}
export declare class UpdateSizeConstraintSetRequest extends SpeakeasyBase {
    updateSizeConstraintSetRequest: shared.UpdateSizeConstraintSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSizeConstraintSetXAmzTargetEnum;
}
export declare class UpdateSizeConstraintSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSizeConstraintSetResponse?: shared.UpdateSizeConstraintSetResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidAccountException
     */
    wafInvalidAccountException?: any;
    /**
     * WAFInvalidOperationException
     */
    wafInvalidOperationException?: any;
    /**
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFLimitsExceededException
     */
    wafLimitsExceededException?: any;
    /**
     * WAFNonexistentContainerException
     */
    wafNonexistentContainerException?: any;
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
