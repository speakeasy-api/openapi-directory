import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";
export declare class CreateIdentityProviderRequest extends SpeakeasyBase {
    attributeMapping?: Record<string, string>;
    idpIdentifiers?: string[];
    providerDetails: Record<string, string>;
    providerName: string;
    providerType: IdentityProviderTypeTypeEnum;
    userPoolId: string;
}
