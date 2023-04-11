import { SpeakeasyBase } from "../../../internal/utils";
import { OutputLocation } from "./outputlocation";
import { WorldExportJobStatusEnum } from "./worldexportjobstatusenum";
/**
 * Information about a world export job.
 */
export declare class WorldExportJobSummary extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    /**
     * The output location.
     */
    outputLocation?: OutputLocation;
    status?: WorldExportJobStatusEnum;
    worlds?: string[];
}
