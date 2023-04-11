import { SpeakeasyBase } from "../../../internal/utils";
import { LogsConfig } from "./logsconfig";
import { ProjectArtifacts } from "./projectartifacts";
import { ProjectBadge } from "./projectbadge";
import { ProjectBuildBatchConfig } from "./projectbuildbatchconfig";
import { ProjectCache } from "./projectcache";
import { ProjectEnvironment } from "./projectenvironment";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { ProjectSource } from "./projectsource";
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectVisibilityTypeEnum } from "./projectvisibilitytypeenum";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
import { Webhook } from "./webhook";
/**
 * Information about a build project.
 */
export declare class Project extends SpeakeasyBase {
    arn?: string;
    artifacts?: ProjectArtifacts;
    badge?: ProjectBadge;
    buildBatchConfig?: ProjectBuildBatchConfig;
    cache?: ProjectCache;
    concurrentBuildLimit?: number;
    created?: Date;
    description?: string;
    encryptionKey?: string;
    environment?: ProjectEnvironment;
    fileSystemLocations?: ProjectFileSystemLocation[];
    lastModified?: Date;
    logsConfig?: LogsConfig;
    name?: string;
    /**
     * <p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>
     */
    projectVisibility?: ProjectVisibilityTypeEnum;
    publicProjectAlias?: string;
    queuedTimeoutInMinutes?: number;
    resourceAccessRole?: string;
    secondaryArtifacts?: ProjectArtifacts[];
    secondarySourceVersions?: ProjectSourceVersion[];
    secondarySources?: ProjectSource[];
    serviceRole?: string;
    source?: ProjectSource;
    sourceVersion?: string;
    tags?: Tag[];
    timeoutInMinutes?: number;
    vpcConfig?: VpcConfig;
    webhook?: Webhook;
}
