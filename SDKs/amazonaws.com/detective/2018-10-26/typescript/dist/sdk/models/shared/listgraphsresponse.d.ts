import { SpeakeasyBase } from "../../../internal/utils";
import { Graph } from "./graph";
/**
 * Success
 */
export declare class ListGraphsResponse extends SpeakeasyBase {
    graphList?: Graph[];
    nextToken?: string;
}
