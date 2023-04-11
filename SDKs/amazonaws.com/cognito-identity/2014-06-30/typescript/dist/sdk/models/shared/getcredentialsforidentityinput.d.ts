import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input to the <code>GetCredentialsForIdentity</code> action.
 */
export declare class GetCredentialsForIdentityInput extends SpeakeasyBase {
    customRoleArn?: string;
    identityId: string;
    logins?: Record<string, string>;
}
