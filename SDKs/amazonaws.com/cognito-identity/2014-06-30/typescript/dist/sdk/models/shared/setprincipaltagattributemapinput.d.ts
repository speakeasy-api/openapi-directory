import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetPrincipalTagAttributeMapInput extends SpeakeasyBase {
    identityPoolId: string;
    identityProviderName: string;
    principalTags?: Record<string, string>;
    useDefaults?: boolean;
}
