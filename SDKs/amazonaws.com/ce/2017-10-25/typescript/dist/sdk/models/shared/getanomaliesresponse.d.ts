import { SpeakeasyBase } from "../../../internal/utils";
import { Anomaly } from "./anomaly";
/**
 * Success
 */
export declare class GetAnomaliesResponse extends SpeakeasyBase {
    anomalies: Anomaly[];
    nextPageToken?: string;
}
