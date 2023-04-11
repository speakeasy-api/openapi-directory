import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A table showing information about the most recent successful and failed attempts to ingest events.
 */
export declare class IngestionStatus extends SpeakeasyBase {
    latestIngestionAttemptEventID?: string;
    latestIngestionAttemptTime?: Date;
    latestIngestionErrorCode?: string;
    latestIngestionSuccessEventID?: string;
    latestIngestionSuccessTime?: Date;
}
