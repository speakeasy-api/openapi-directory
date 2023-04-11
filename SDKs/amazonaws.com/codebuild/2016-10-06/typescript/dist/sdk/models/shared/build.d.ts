import { SpeakeasyBase } from "../../../internal/utils";
import { BuildArtifacts } from "./buildartifacts";
import { BuildPhase } from "./buildphase";
import { DebugSession } from "./debugsession";
import { ExportedEnvironmentVariable } from "./exportedenvironmentvariable";
import { LogsLocation } from "./logslocation";
import { NetworkInterface } from "./networkinterface";
import { ProjectCache } from "./projectcache";
import { ProjectEnvironment } from "./projectenvironment";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { ProjectSource } from "./projectsource";
import { ProjectSourceVersion } from "./projectsourceversion";
import { StatusTypeEnum } from "./statustypeenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Information about a build.
 */
export declare class Build extends SpeakeasyBase {
    arn?: string;
    artifacts?: BuildArtifacts;
    buildBatchArn?: string;
    buildComplete?: boolean;
    buildNumber?: number;
    buildStatus?: StatusTypeEnum;
    cache?: ProjectCache;
    currentPhase?: string;
    debugSession?: DebugSession;
    encryptionKey?: string;
    endTime?: Date;
    environment?: ProjectEnvironment;
    exportedEnvironmentVariables?: ExportedEnvironmentVariable[];
    fileSystemLocations?: ProjectFileSystemLocation[];
    id?: string;
    initiator?: string;
    logs?: LogsLocation;
    networkInterface?: NetworkInterface;
    phases?: BuildPhase[];
    projectName?: string;
    queuedTimeoutInMinutes?: number;
    reportArns?: string[];
    resolvedSourceVersion?: string;
    secondaryArtifacts?: BuildArtifacts[];
    secondarySourceVersions?: ProjectSourceVersion[];
    secondarySources?: ProjectSource[];
    serviceRole?: string;
    source?: ProjectSource;
    sourceVersion?: string;
    startTime?: Date;
    timeoutInMinutes?: number;
    vpcConfig?: VpcConfig;
}
