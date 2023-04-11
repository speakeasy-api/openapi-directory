import { SpeakeasyBase } from "../../../internal/utils";
import { ModelBiasAppSpecification } from "./modelbiasappspecification";
import { ModelBiasBaselineConfig } from "./modelbiasbaselineconfig";
import { ModelBiasJobInput } from "./modelbiasjobinput";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
import { Tag } from "./tag";
export declare class CreateModelBiasJobDefinitionRequest extends SpeakeasyBase {
    jobDefinitionName: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     */
    jobResources: MonitoringResources;
    modelBiasAppSpecification: ModelBiasAppSpecification;
    modelBiasBaselineConfig?: ModelBiasBaselineConfig;
    modelBiasJobInput: ModelBiasJobInput;
    /**
     * The output configuration for monitoring jobs.
     */
    modelBiasJobOutputConfig: MonitoringOutputConfig;
    networkConfig?: MonitoringNetworkConfig;
    roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     */
    stoppingCondition?: MonitoringStoppingCondition;
    tags?: Tag[];
}
