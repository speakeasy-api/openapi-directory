import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
/**
 * Success
 */
export declare class ListMembersResponse extends SpeakeasyBase {
    members?: Member[];
    nextToken?: string;
}
