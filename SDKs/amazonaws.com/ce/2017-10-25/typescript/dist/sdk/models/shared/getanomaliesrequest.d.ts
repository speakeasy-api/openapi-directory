import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDateInterval } from "./anomalydateinterval";
import { AnomalyFeedbackTypeEnum } from "./anomalyfeedbacktypeenum";
import { TotalImpactFilter } from "./totalimpactfilter";
export declare class GetAnomaliesRequest extends SpeakeasyBase {
    dateInterval: AnomalyDateInterval;
    feedback?: AnomalyFeedbackTypeEnum;
    maxResults?: number;
    monitorArn?: string;
    nextPageToken?: string;
    totalImpact?: TotalImpactFilter;
}
