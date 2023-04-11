import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Success
 */
export declare class DescribeUsersResponse extends SpeakeasyBase {
    nextToken?: string;
    users?: User[];
}
