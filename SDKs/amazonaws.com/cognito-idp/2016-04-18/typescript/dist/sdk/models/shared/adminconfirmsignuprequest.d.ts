import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to confirm user registration.
 */
export declare class AdminConfirmSignUpRequest extends SpeakeasyBase {
    clientMetadata?: Record<string, string>;
    userPoolId: string;
    username: string;
}
