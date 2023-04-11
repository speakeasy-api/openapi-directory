import { SpeakeasyBase } from "../../../internal/utils";
import { ListedUser } from "./listeduser";
/**
 * Success
 */
export declare class ListUsersResponse extends SpeakeasyBase {
    nextToken?: string;
    serverId: string;
    users: ListedUser[];
}
