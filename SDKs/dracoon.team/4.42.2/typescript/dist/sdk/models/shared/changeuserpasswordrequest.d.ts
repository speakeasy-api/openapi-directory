import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating user's password
 */
export declare class ChangeUserPasswordRequest extends SpeakeasyBase {
    /**
     * New password
     */
    newPassword: string;
    /**
     * Old password
     */
    oldPassword: string;
}
