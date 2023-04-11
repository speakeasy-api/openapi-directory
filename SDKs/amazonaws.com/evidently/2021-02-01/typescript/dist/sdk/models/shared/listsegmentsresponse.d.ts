import { SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";
/**
 * Success
 */
export declare class ListSegmentsResponse extends SpeakeasyBase {
    nextToken?: string;
    segments?: Segment[];
}
