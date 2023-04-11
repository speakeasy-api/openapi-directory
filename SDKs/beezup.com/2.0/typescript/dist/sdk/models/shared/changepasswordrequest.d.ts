import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChangePasswordRequest extends SpeakeasyBase {
    /**
     * Your new password. Which must respect the same constraints as the user registeration
     */
    newPassword: string;
    /**
     * Your current password
     */
    oldPassword: string;
}
