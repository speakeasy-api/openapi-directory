import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStateEnum } from "./applicationstateenum";
import { ArchitectureEnum } from "./architectureenum";
import { AutoStartConfig } from "./autostartconfig";
import { AutoStopConfig } from "./autostopconfig";
import { ImageConfiguration } from "./imageconfiguration";
import { InitialCapacityConfig } from "./initialcapacityconfig";
import { MaximumAllowedResources } from "./maximumallowedresources";
import { NetworkConfiguration } from "./networkconfiguration";
import { WorkerTypeSpecification } from "./workertypespecification";
/**
 * Information about an application. EMR Serverless uses applications to run jobs.
 */
export declare class Application extends SpeakeasyBase {
    applicationId: string;
    architecture?: ArchitectureEnum;
    arn: string;
    autoStartConfiguration?: AutoStartConfig;
    autoStopConfiguration?: AutoStopConfig;
    createdAt: Date;
    imageConfiguration?: ImageConfiguration;
    initialCapacity?: Record<string, InitialCapacityConfig>;
    maximumCapacity?: MaximumAllowedResources;
    name?: string;
    networkConfiguration?: NetworkConfiguration;
    releaseLabel: string;
    state: ApplicationStateEnum;
    stateDetails?: string;
    tags?: Record<string, string>;
    type: string;
    updatedAt: Date;
    workerTypeSpecifications?: Record<string, WorkerTypeSpecification>;
}
