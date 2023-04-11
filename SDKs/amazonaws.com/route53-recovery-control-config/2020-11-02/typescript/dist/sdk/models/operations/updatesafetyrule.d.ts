import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
 */
export declare class UpdateSafetyRuleRequestBodyAssertionRuleUpdate extends SpeakeasyBase {
    name?: string;
    safetyRuleArn?: string;
    waitPeriodMs?: number;
}
/**
 * Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
 */
export declare class UpdateSafetyRuleRequestBodyGatingRuleUpdate extends SpeakeasyBase {
    name?: string;
    safetyRuleArn?: string;
    waitPeriodMs?: number;
}
export declare class UpdateSafetyRuleRequestBody extends SpeakeasyBase {
    /**
     * An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
     */
    assertionRuleUpdate?: UpdateSafetyRuleRequestBodyAssertionRuleUpdate;
    /**
     * Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
     */
    gatingRuleUpdate?: UpdateSafetyRuleRequestBodyGatingRuleUpdate;
}
export declare class UpdateSafetyRuleRequest extends SpeakeasyBase {
    requestBody: UpdateSafetyRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSafetyRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateSafetyRuleResponse?: shared.UpdateSafetyRuleResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
