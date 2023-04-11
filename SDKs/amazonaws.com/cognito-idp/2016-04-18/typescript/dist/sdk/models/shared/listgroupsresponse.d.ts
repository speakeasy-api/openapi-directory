import { SpeakeasyBase } from "../../../internal/utils";
import { GroupType } from "./grouptype";
/**
 * Success
 */
export declare class ListGroupsResponse extends SpeakeasyBase {
    groups?: GroupType[];
    nextToken?: string;
}
