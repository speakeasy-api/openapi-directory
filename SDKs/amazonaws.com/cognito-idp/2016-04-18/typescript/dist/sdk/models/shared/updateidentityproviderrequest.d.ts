import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateIdentityProviderRequest extends SpeakeasyBase {
    attributeMapping?: Record<string, string>;
    idpIdentifiers?: string[];
    providerDetails?: Record<string, string>;
    providerName: string;
    userPoolId: string;
}
