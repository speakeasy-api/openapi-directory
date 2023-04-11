import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A new assertion rule for a control panel.
 */
export declare class CreateSafetyRuleRequestBodyAssertionRule extends SpeakeasyBase {
    assertedControls?: string[];
    controlPanelArn?: string;
    name?: string;
    ruleConfig?: shared.RuleConfig;
    waitPeriodMs?: number;
}
/**
 * A new gating rule for a control panel.
 */
export declare class CreateSafetyRuleRequestBodyGatingRule extends SpeakeasyBase {
    controlPanelArn?: string;
    gatingControls?: string[];
    name?: string;
    ruleConfig?: shared.RuleConfig;
    targetControls?: string[];
    waitPeriodMs?: number;
}
export declare class CreateSafetyRuleRequestBody extends SpeakeasyBase {
    /**
     * A new assertion rule for a control panel.
     */
    assertionRule?: CreateSafetyRuleRequestBodyAssertionRule;
    /**
     * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
     */
    clientToken?: string;
    /**
     * A new gating rule for a control panel.
     */
    gatingRule?: CreateSafetyRuleRequestBodyGatingRule;
    /**
     * The tags associated with the safety rule.
     */
    tags?: Record<string, string>;
}
export declare class CreateSafetyRuleRequest extends SpeakeasyBase {
    requestBody: CreateSafetyRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSafetyRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSafetyRuleResponse?: shared.CreateSafetyRuleResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
