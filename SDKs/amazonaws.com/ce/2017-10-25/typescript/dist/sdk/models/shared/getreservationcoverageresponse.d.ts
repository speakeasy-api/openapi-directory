import { SpeakeasyBase } from "../../../internal/utils";
import { Coverage } from "./coverage";
import { CoverageByTime } from "./coveragebytime";
/**
 * Success
 */
export declare class GetReservationCoverageResponse extends SpeakeasyBase {
    coveragesByTime: CoverageByTime[];
    nextPageToken?: string;
    total?: Coverage;
}
