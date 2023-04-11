import { SpeakeasyBase } from "../../../internal/utils";
import { DataQualityAppSpecification } from "./dataqualityappspecification";
import { DataQualityBaselineConfig } from "./dataqualitybaselineconfig";
import { DataQualityJobInput } from "./dataqualityjobinput";
import { MonitoringNetworkConfig } from "./monitoringnetworkconfig";
import { MonitoringOutputConfig } from "./monitoringoutputconfig";
import { MonitoringResources } from "./monitoringresources";
import { MonitoringStoppingCondition } from "./monitoringstoppingcondition";
/**
 * Success
 */
export declare class DescribeDataQualityJobDefinitionResponse extends SpeakeasyBase {
    creationTime: Date;
    dataQualityAppSpecification: DataQualityAppSpecification;
    dataQualityBaselineConfig?: DataQualityBaselineConfig;
    dataQualityJobInput: DataQualityJobInput;
    /**
     * The output configuration for monitoring jobs.
     */
    dataQualityJobOutputConfig: MonitoringOutputConfig;
    jobDefinitionArn: string;
    jobDefinitionName: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     */
    jobResources: MonitoringResources;
    networkConfig?: MonitoringNetworkConfig;
    roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     */
    stoppingCondition?: MonitoringStoppingCondition;
}
