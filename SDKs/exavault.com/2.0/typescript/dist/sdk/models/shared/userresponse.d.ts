import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Response object for users.
**/
export declare class UserResponse extends SpeakeasyBase {
    data?: User;
    included?: any[];
    responseStatus?: number;
}
