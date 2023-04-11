import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyFeedbackTypeEnum } from "./anomalyfeedbacktypeenum";
import { AnomalyScore } from "./anomalyscore";
import { Impact } from "./impact";
import { RootCause } from "./rootcause";
/**
 * An unusual cost pattern. This consists of the detailed metadata and the current status of the anomaly object.
 */
export declare class Anomaly extends SpeakeasyBase {
    anomalyEndDate?: string;
    anomalyId: string;
    anomalyScore: AnomalyScore;
    anomalyStartDate?: string;
    dimensionValue?: string;
    feedback?: AnomalyFeedbackTypeEnum;
    impact: Impact;
    monitorArn: string;
    rootCauses?: RootCause[];
}
