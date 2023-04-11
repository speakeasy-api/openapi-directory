import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRateBasedRuleXAmzTargetEnum {
    AWSWAFRegional20161128UpdateRateBasedRule = "AWSWAF_Regional_20161128.UpdateRateBasedRule"
}
export declare class UpdateRateBasedRuleRequest extends SpeakeasyBase {
    updateRateBasedRuleRequest: shared.UpdateRateBasedRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRateBasedRuleXAmzTargetEnum;
}
export declare class UpdateRateBasedRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateRateBasedRuleResponse?: shared.UpdateRateBasedRuleResponse;
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
