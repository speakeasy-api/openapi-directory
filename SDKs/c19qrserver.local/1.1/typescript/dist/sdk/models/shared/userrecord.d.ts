import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A team member user record
 */
export declare class UserRecord extends SpeakeasyBase {
    /**
     * If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.
     *
     * @remarks
     *
     */
    admin?: boolean;
    /**
     * The user's email address
     */
    email?: string;
    /**
     * The id of the user's record
     */
    id?: number;
    /**
     * The user's name
     */
    name?: string;
    /**
     * Not used in this version of the API. For future use.
     */
    readOnly?: boolean;
}
