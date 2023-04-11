import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeResponse } from "./computeresponse";
import { DataSource } from "./datasource";
import { FailureBehaviorEnum } from "./failurebehaviorenum";
import { LoggingConfig } from "./loggingconfig";
import { NetworkInterface } from "./networkinterface";
import { OutputLocation } from "./outputlocation";
import { RobotApplicationConfig } from "./robotapplicationconfig";
import { SimulationApplicationConfig } from "./simulationapplicationconfig";
import { SimulationJobErrorCodeEnum } from "./simulationjoberrorcodeenum";
import { SimulationJobStatusEnum } from "./simulationjobstatusenum";
import { VPCConfigResponse } from "./vpcconfigresponse";
/**
 * Information about a simulation job.
 */
export declare class SimulationJob extends SpeakeasyBase {
    arn?: string;
    clientRequestToken?: string;
    compute?: ComputeResponse;
    dataSources?: DataSource[];
    failureBehavior?: FailureBehaviorEnum;
    failureCode?: SimulationJobErrorCodeEnum;
    failureReason?: string;
    iamRole?: string;
    lastStartedAt?: Date;
    lastUpdatedAt?: Date;
    loggingConfig?: LoggingConfig;
    maxJobDurationInSeconds?: number;
    name?: string;
    networkInterface?: NetworkInterface;
    outputLocation?: OutputLocation;
    robotApplications?: RobotApplicationConfig[];
    simulationApplications?: SimulationApplicationConfig[];
    simulationTimeMillis?: number;
    status?: SimulationJobStatusEnum;
    tags?: Record<string, string>;
    vpcConfig?: VPCConfigResponse;
}
