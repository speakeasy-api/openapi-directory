import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringAppSpecification } from "./monitoringappspecification";
import { MonitoringBaselineConfig } from "./monitoringbaselineconfig";
import { MonitoringInput } from "./monitoringinput";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { NetworkConfig } from "./networkconfig";
/**
 * Defines the monitoring job.
 */
export declare class MonitoringJobDefinition extends SpeakeasyBase {
    baselineConfig?: MonitoringBaselineConfig;
    environment?: Record<string, string>;
    monitoringAppSpecification: MonitoringAppSpecification;
    monitoringInputs: MonitoringInput[];
    monitoringOutputConfig: MonitoringOutputConfig;
    monitoringResources: MonitoringResources;
    networkConfig?: NetworkConfig;
    roleArn: string;
    stoppingCondition?: MonitoringStoppingCondition;
}
