import { SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";
/**
 * Success
 */
export declare class GetSnapshotsResponse extends SpeakeasyBase {
    nextToken?: string;
    snapShotTimeFilter?: TimeRange;
    snapshotsData?: string[][];
    snapshotsDataHeader?: string[];
}
