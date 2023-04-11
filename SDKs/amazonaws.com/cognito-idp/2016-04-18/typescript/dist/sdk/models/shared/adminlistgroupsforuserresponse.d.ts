import { SpeakeasyBase } from "../../../internal/utils";
import { GroupType } from "./grouptype";
/**
 * Success
 */
export declare class AdminListGroupsForUserResponse extends SpeakeasyBase {
    groups?: GroupType[];
    nextToken?: string;
}
