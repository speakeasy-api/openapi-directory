import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringConstraintsResource } from "./monitoringconstraintsresource";
/**
 * The configuration for a baseline model explainability job.
 */
export declare class ModelExplainabilityBaselineConfig extends SpeakeasyBase {
    baseliningJobName?: string;
    /**
     * The constraints resource for a monitoring job.
     */
    constraintsResource?: MonitoringConstraintsResource;
}
