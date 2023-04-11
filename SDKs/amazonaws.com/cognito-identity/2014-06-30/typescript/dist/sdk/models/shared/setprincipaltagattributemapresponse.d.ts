import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class SetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
    identityPoolId?: string;
    identityProviderName?: string;
    principalTags?: Record<string, string>;
    useDefaults?: boolean;
}
