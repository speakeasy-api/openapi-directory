import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRateBasedRuleXAmzTargetEnum {
    AWSWAF20150824DeleteRateBasedRule = "AWSWAF_20150824.DeleteRateBasedRule"
}
export declare class DeleteRateBasedRuleRequest extends SpeakeasyBase {
    deleteRateBasedRuleRequest: shared.DeleteRateBasedRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRateBasedRuleXAmzTargetEnum;
}
export declare class DeleteRateBasedRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRateBasedRuleResponse?: shared.DeleteRateBasedRuleResponse;
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
    /**
     * WAFTagOperationException
     */
    wafTagOperationException?: any;
    /**
     * WAFTagOperationInternalErrorException
     */
    wafTagOperationInternalErrorException?: any;
}
