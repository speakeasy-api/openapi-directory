import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateAccountPasswordPolicyRequest extends SpeakeasyBase {
    allowUsersToChangePassword?: boolean;
    hardExpiry?: boolean;
    maxPasswordAge?: number;
    minimumPasswordLength?: number;
    passwordReusePrevention?: number;
    requireLowercaseCharacters?: boolean;
    requireNumbers?: boolean;
    requireSymbols?: boolean;
    requireUppercaseCharacters?: boolean;
}
