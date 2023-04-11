import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";
export declare class ListInferenceSchedulersRequest extends SpeakeasyBase {
    inferenceSchedulerNameBeginsWith?: string;
    maxResults?: number;
    modelName?: string;
    nextToken?: string;
    status?: InferenceSchedulerStatusEnum;
}
