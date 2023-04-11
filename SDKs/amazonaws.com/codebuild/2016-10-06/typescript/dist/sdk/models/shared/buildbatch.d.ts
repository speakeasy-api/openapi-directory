import { SpeakeasyBase } from "../../../internal/utils";
import { BuildArtifacts } from "./buildartifacts";
import { BuildBatchPhase } from "./buildbatchphase";
import { BuildGroup } from "./buildgroup";
import { LogsConfig } from "./logsconfig";
import { ProjectBuildBatchConfig } from "./projectbuildbatchconfig";
import { ProjectCache } from "./projectcache";
import { ProjectEnvironment } from "./projectenvironment";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { ProjectSource } from "./projectsource";
import { ProjectSourceVersion } from "./projectsourceversion";
import { StatusTypeEnum } from "./statustypeenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Contains information about a batch build.
 */
export declare class BuildBatch extends SpeakeasyBase {
    arn?: string;
    artifacts?: BuildArtifacts;
    /**
     * Contains configuration information about a batch build project.
     */
    buildBatchConfig?: ProjectBuildBatchConfig;
    buildBatchNumber?: number;
    buildBatchStatus?: StatusTypeEnum;
    buildGroups?: BuildGroup[];
    buildTimeoutInMinutes?: number;
    /**
     * Information about the cache for the build project.
     */
    cache?: ProjectCache;
    complete?: boolean;
    currentPhase?: string;
    debugSessionEnabled?: boolean;
    encryptionKey?: string;
    endTime?: Date;
    /**
     * Information about the build environment of the build project.
     */
    environment?: ProjectEnvironment;
    fileSystemLocations?: ProjectFileSystemLocation[];
    id?: string;
    initiator?: string;
    /**
     *  Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.
     */
    logConfig?: LogsConfig;
    phases?: BuildBatchPhase[];
    projectName?: string;
    queuedTimeoutInMinutes?: number;
    resolvedSourceVersion?: string;
    secondaryArtifacts?: BuildArtifacts[];
    secondarySourceVersions?: ProjectSourceVersion[];
    secondarySources?: ProjectSource[];
    serviceRole?: string;
    /**
     * Information about the build input source code for the build project.
     */
    source?: ProjectSource;
    sourceVersion?: string;
    startTime?: Date;
    /**
     * Information about the VPC configuration that CodeBuild accesses.
     */
    vpcConfig?: VpcConfig;
}
