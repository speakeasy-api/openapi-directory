import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A user identification object for specification with the addUser/removeUser endpoints.
 */
export declare class TeamRemoveUserRequest extends SpeakeasyBase {
    /**
     * A string identifying a user. This can either be the string "me", an email, or the gid of a user.
     */
    user?: string;
}
