import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOverrides } from "./configurationoverrides";
import { JobDriver } from "./jobdriver";
import { JobRunStateEnum } from "./jobrunstateenum";
import { NetworkConfiguration } from "./networkconfiguration";
import { TotalResourceUtilization } from "./totalresourceutilization";
/**
 * Information about a job run. A job run is a unit of work, such as a Spark JAR, Hive query, or SparkSQL query, that you submit to an EMR Serverless application.
 */
export declare class JobRun extends SpeakeasyBase {
    applicationId: string;
    arn: string;
    configurationOverrides?: ConfigurationOverrides;
    createdAt: Date;
    createdBy: string;
    executionRole: string;
    jobDriver: JobDriver;
    jobRunId: string;
    name?: string;
    /**
     * The network configuration for customer VPC connectivity.
     */
    networkConfiguration?: NetworkConfiguration;
    releaseLabel: string;
    state: JobRunStateEnum;
    stateDetails: string;
    tags?: Record<string, string>;
    totalExecutionDurationSeconds?: number;
    totalResourceUtilization?: TotalResourceUtilization;
    updatedAt: Date;
}
