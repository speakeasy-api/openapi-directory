import { SpeakeasyBase } from "../../../internal/utils";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
import { TranscriptionJobSummary } from "./transcriptionjobsummary";
/**
 * Success
 */
export declare class ListTranscriptionJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    status?: TranscriptionJobStatusEnum;
    transcriptionJobSummaries?: TranscriptionJobSummary[];
}
