import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Success
 */
export declare class ListUsersResponse extends SpeakeasyBase {
    nextToken?: string;
    users?: User[];
}
