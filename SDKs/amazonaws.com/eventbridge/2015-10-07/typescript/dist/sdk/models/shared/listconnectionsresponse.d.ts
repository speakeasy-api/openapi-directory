import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * Success
 */
export declare class ListConnectionsResponse extends SpeakeasyBase {
    connections?: Connection[];
    nextToken?: string;
}
