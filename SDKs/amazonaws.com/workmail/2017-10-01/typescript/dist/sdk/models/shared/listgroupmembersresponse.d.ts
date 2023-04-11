import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
/**
 * Success
 */
export declare class ListGroupMembersResponse extends SpeakeasyBase {
    members?: Member[];
    nextToken?: string;
}
