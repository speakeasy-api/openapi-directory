import { SpeakeasyBase } from "../../../internal/utils";
import { PagerDutyIncidentConfiguration } from "./pagerdutyincidentconfiguration";
/**
 * Details about the PagerDuty configuration for a response plan.
 */
export declare class PagerDutyConfiguration extends SpeakeasyBase {
    name: string;
    pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;
    secretId: string;
}
