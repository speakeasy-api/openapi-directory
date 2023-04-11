import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
/**
 * The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution.
 */
export declare class TargetLocation extends SpeakeasyBase {
    accounts?: string[];
    executionRoleName?: string;
    regions?: string[];
    /**
     * The details for the CloudWatch alarm you want to apply to an automation or command.
     */
    targetLocationAlarmConfiguration?: AlarmConfiguration;
    targetLocationMaxConcurrency?: string;
    targetLocationMaxErrors?: string;
}
