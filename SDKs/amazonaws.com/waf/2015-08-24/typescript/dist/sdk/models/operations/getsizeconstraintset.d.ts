import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSizeConstraintSetXAmzTargetEnum {
    AWSWAF20150824GetSizeConstraintSet = "AWSWAF_20150824.GetSizeConstraintSet"
}
export declare class GetSizeConstraintSetRequest extends SpeakeasyBase {
    getSizeConstraintSetRequest: shared.GetSizeConstraintSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSizeConstraintSetXAmzTargetEnum;
}
export declare class GetSizeConstraintSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSizeConstraintSetResponse?: shared.GetSizeConstraintSetResponse;
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
