import { SpeakeasyBase } from "../../../internal/utils";
import { ModelQualityAppSpecification } from "./modelqualityappspecification";
import { ModelQualityBaselineConfig } from "./modelqualitybaselineconfig";
import { ModelQualityJobInput } from "./modelqualityjobinput";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { Tag } from "./tag";
export declare class CreateModelQualityJobDefinitionRequest extends SpeakeasyBase {
    jobDefinitionName: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     */
    jobResources: MonitoringResources;
    modelQualityAppSpecification: ModelQualityAppSpecification;
    modelQualityBaselineConfig?: ModelQualityBaselineConfig;
    modelQualityJobInput: ModelQualityJobInput;
    /**
     * The output configuration for monitoring jobs.
     */
    modelQualityJobOutputConfig: MonitoringOutputConfig;
    networkConfig?: MonitoringNetworkConfig;
    roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     */
    stoppingCondition?: MonitoringStoppingCondition;
    tags?: Tag[];
}
