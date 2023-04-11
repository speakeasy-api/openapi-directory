import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListInferenceEventsRequest extends SpeakeasyBase {
    inferenceSchedulerName: string;
    intervalEndTime: Date;
    intervalStartTime: Date;
    maxResults?: number;
    nextToken?: string;
}
