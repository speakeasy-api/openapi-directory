import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to reset a user's password as an administrator.
 */
export declare class AdminResetUserPasswordRequest extends SpeakeasyBase {
    clientMetadata?: Record<string, string>;
    userPoolId: string;
    username: string;
}
