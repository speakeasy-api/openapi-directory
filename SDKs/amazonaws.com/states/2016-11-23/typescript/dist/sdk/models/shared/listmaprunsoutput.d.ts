import { SpeakeasyBase } from "../../../internal/utils";
import { MapRunListItem } from "./maprunlistitem";
/**
 * Success
 */
export declare class ListMapRunsOutput extends SpeakeasyBase {
    mapRuns: MapRunListItem[];
    nextToken?: string;
}
