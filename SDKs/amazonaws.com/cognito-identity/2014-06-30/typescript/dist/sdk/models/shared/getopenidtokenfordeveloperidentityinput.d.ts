import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.
**/
export declare class GetOpenIdTokenForDeveloperIdentityInput extends SpeakeasyBase {
    identityId?: string;
    identityPoolId: string;
    logins: Record<string, string>;
    principalTags?: Record<string, string>;
    tokenDuration?: number;
}
