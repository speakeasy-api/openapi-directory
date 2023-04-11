import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentStatusEnum } from "./environmentstatusenum";
import { LastUpdate } from "./lastupdate";
import { LoggingConfiguration } from "./loggingconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
import { WebserverAccessModeEnum } from "./webserveraccessmodeenum";
/**
 * Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
 */
export declare class Environment extends SpeakeasyBase {
    airflowConfigurationOptions?: Record<string, string>;
    airflowVersion?: string;
    arn?: string;
    createdAt?: Date;
    dagS3Path?: string;
    environmentClass?: string;
    executionRoleArn?: string;
    kmsKey?: string;
    lastUpdate?: LastUpdate;
    loggingConfiguration?: LoggingConfiguration;
    maxWorkers?: number;
    minWorkers?: number;
    name?: string;
    networkConfiguration?: NetworkConfiguration;
    pluginsS3ObjectVersion?: string;
    pluginsS3Path?: string;
    requirementsS3ObjectVersion?: string;
    requirementsS3Path?: string;
    schedulers?: number;
    serviceRoleArn?: string;
    sourceBucketArn?: string;
    status?: EnvironmentStatusEnum;
    tags?: Record<string, string>;
    webserverAccessMode?: WebserverAccessModeEnum;
    webserverUrl?: string;
    weeklyMaintenanceWindowStart?: string;
}
