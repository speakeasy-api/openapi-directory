import { SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";
/**
 * Success
 */
export declare class ListQueriesResponse extends SpeakeasyBase {
    nextToken?: string;
    queries?: Query[];
}
