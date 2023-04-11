import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Create User Request
 */
export declare class UserRequestEntity extends SpeakeasyBase {
    /**
     * Details of the user's request
     */
    details?: string;
    /**
     * User email address
     */
    email?: string;
    /**
     * ID
     */
    id?: number;
    /**
     * User's full name
     */
    name?: string;
}
