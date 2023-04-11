import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * Success
 */
export declare class ListGroupsResponse extends SpeakeasyBase {
    groups?: Group[];
    nextToken?: string;
}
