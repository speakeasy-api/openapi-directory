import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Status information for your Config Managed rules and Config Custom Policy rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about Config Custom Lambda rules.</p>
 */
export declare class ConfigRuleEvaluationStatus extends SpeakeasyBase {
    configRuleArn?: string;
    configRuleId?: string;
    configRuleName?: string;
    firstActivatedTime?: Date;
    firstEvaluationStarted?: boolean;
    lastDeactivatedTime?: Date;
    lastDebugLogDeliveryStatus?: string;
    lastDebugLogDeliveryStatusReason?: string;
    lastDebugLogDeliveryTime?: Date;
    lastErrorCode?: string;
    lastErrorMessage?: string;
    lastFailedEvaluationTime?: Date;
    lastFailedInvocationTime?: Date;
    lastSuccessfulEvaluationTime?: Date;
    lastSuccessfulInvocationTime?: Date;
}
