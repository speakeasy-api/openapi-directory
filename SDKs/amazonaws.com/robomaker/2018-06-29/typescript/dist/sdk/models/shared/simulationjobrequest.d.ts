import { SpeakeasyBase } from "../../../internal/utils";
import { Compute } from "./compute";
import { DataSourceConfig } from "./datasourceconfig";
import { FailureBehaviorEnum } from "./failurebehaviorenum";
import { LoggingConfig } from "./loggingconfig";
import { OutputLocation } from "./outputlocation";
import { RobotApplicationConfig } from "./robotapplicationconfig";
import { SimulationApplicationConfig } from "./simulationapplicationconfig";
import { VPCConfig } from "./vpcconfig";
/**
 * Information about a simulation job request.
 */
export declare class SimulationJobRequest extends SpeakeasyBase {
    compute?: Compute;
    dataSources?: DataSourceConfig[];
    failureBehavior?: FailureBehaviorEnum;
    iamRole?: string;
    /**
     * The logging configuration.
     */
    loggingConfig?: LoggingConfig;
    maxJobDurationInSeconds: number;
    /**
     * The output location.
     */
    outputLocation?: OutputLocation;
    robotApplications?: RobotApplicationConfig[];
    simulationApplications?: SimulationApplicationConfig[];
    tags?: Record<string, string>;
    useDefaultApplications?: boolean;
    /**
     * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
     */
    vpcConfig?: VPCConfig;
}
