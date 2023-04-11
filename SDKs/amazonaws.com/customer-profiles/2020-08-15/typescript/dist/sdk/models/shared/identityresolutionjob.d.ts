import { SpeakeasyBase } from "../../../internal/utils";
import { ExportingLocation } from "./exportinglocation";
import { IdentityResolutionJobStatusEnum } from "./identityresolutionjobstatusenum";
import { JobStats } from "./jobstats";
/**
 * Information about the Identity Resolution Job.
 */
export declare class IdentityResolutionJob extends SpeakeasyBase {
    domainName?: string;
    exportingLocation?: ExportingLocation;
    jobEndTime?: Date;
    jobId?: string;
    jobStartTime?: Date;
    jobStats?: JobStats;
    message?: string;
    status?: IdentityResolutionJobStatusEnum;
}
