import { SpeakeasyBase } from "../../../internal/utils";
import { ModelExplainabilityAppSpecification } from "./modelexplainabilityappspecification";
import { ModelExplainabilityBaselineConfig } from "./modelexplainabilitybaselineconfig";
import { ModelExplainabilityJobInput } from "./modelexplainabilityjobinput";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
/**
 * Success
 */
export declare class DescribeModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
    creationTime: Date;
    jobDefinitionArn: string;
    jobDefinitionName: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     */
    jobResources: MonitoringResources;
    modelExplainabilityAppSpecification: ModelExplainabilityAppSpecification;
    modelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;
    modelExplainabilityJobInput: ModelExplainabilityJobInput;
    /**
     * The output configuration for monitoring jobs.
     */
    modelExplainabilityJobOutputConfig: MonitoringOutputConfig;
    networkConfig?: MonitoringNetworkConfig;
    roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     */
    stoppingCondition?: MonitoringStoppingCondition;
}
