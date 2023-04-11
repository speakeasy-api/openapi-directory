import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRuleXAmzTargetEnum {
    AWSWAF20150824DeleteRule = "AWSWAF_20150824.DeleteRule"
}
export declare class DeleteRuleRequest extends SpeakeasyBase {
    deleteRuleRequest: shared.DeleteRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRuleXAmzTargetEnum;
}
export declare class DeleteRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRuleResponse?: shared.DeleteRuleResponse;
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
