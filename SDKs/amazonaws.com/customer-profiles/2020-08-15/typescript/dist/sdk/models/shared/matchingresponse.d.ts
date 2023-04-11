import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMerging } from "./automerging";
import { ExportingConfig } from "./exportingconfig";
import { JobSchedule } from "./jobschedule";
/**
 * The flag that enables the matching process of duplicate profiles.
 */
export declare class MatchingResponse extends SpeakeasyBase {
    autoMerging?: AutoMerging;
    enabled?: boolean;
    exportingConfig?: ExportingConfig;
    jobSchedule?: JobSchedule;
}
