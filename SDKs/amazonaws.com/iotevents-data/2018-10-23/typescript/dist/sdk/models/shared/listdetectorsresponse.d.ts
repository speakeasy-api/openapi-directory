import { SpeakeasyBase } from "../../../internal/utils";
import { DetectorSummary } from "./detectorsummary";
/**
 * Success
 */
export declare class ListDetectorsResponse extends SpeakeasyBase {
    detectorSummaries?: DetectorSummary[];
    nextToken?: string;
}
