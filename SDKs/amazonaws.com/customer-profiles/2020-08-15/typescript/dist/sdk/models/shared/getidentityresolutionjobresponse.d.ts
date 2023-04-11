import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMerging } from "./automerging";
import { ExportingLocation } from "./exportinglocation";
import { IdentityResolutionJobStatusEnum } from "./identityresolutionjobstatusenum";
import { JobStats } from "./jobstats";
/**
 * Success
 */
export declare class GetIdentityResolutionJobResponse extends SpeakeasyBase {
    autoMerging?: AutoMerging;
    domainName?: string;
    exportingLocation?: ExportingLocation;
    jobEndTime?: Date;
    jobExpirationTime?: Date;
    jobId?: string;
    jobStartTime?: Date;
    jobStats?: JobStats;
    lastUpdatedAt?: Date;
    message?: string;
    status?: IdentityResolutionJobStatusEnum;
}
