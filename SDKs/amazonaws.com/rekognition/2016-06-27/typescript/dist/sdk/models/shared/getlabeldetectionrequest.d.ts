import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDetectionAggregateByEnum } from "./labeldetectionaggregatebyenum";
import { LabelDetectionSortByEnum } from "./labeldetectionsortbyenum";
export declare class GetLabelDetectionRequest extends SpeakeasyBase {
    aggregateBy?: LabelDetectionAggregateByEnum;
    jobId: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: LabelDetectionSortByEnum;
}
