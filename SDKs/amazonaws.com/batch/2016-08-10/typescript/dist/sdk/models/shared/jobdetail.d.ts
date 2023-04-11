import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayPropertiesDetail } from "./arraypropertiesdetail";
import { AttemptDetail } from "./attemptdetail";
import { ContainerDetail } from "./containerdetail";
import { EksAttemptDetail } from "./eksattemptdetail";
import { EksPropertiesDetail } from "./ekspropertiesdetail";
import { JobDependency } from "./jobdependency";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTimeout } from "./jobtimeout";
import { NodeDetails } from "./nodedetails";
import { NodeProperties } from "./nodeproperties";
import { PlatformCapabilityEnum } from "./platformcapabilityenum";
import { RetryStrategy } from "./retrystrategy";
/**
 * An object that represents an Batch job.
 */
export declare class JobDetail extends SpeakeasyBase {
    arrayProperties?: ArrayPropertiesDetail;
    attempts?: AttemptDetail[];
    container?: ContainerDetail;
    createdAt?: number;
    dependsOn?: JobDependency[];
    eksAttempts?: EksAttemptDetail[];
    eksProperties?: EksPropertiesDetail;
    isCancelled?: boolean;
    isTerminated?: boolean;
    jobArn?: string;
    jobDefinition: string;
    jobId: string;
    jobName: string;
    jobQueue: string;
    nodeDetails?: NodeDetails;
    nodeProperties?: NodeProperties;
    parameters?: Record<string, string>;
    platformCapabilities?: PlatformCapabilityEnum[];
    propagateTags?: boolean;
    retryStrategy?: RetryStrategy;
    schedulingPriority?: number;
    shareIdentifier?: string;
    startedAt: number;
    status: JobStatusEnum;
    statusReason?: string;
    stoppedAt?: number;
    tags?: Record<string, string>;
    timeout?: JobTimeout;
}
