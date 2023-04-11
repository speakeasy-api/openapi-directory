import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Response object for users.
 */
export declare class UserResponse extends SpeakeasyBase {
    /**
     * Object contains user properties.
     */
    data?: User;
    included?: any[];
    /**
     * Http code for the response.
     */
    responseStatus?: number;
}
