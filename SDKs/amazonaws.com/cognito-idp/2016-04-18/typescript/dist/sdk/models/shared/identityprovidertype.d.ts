import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";
/**
 * A container for information about an IdP.
 */
export declare class IdentityProviderType extends SpeakeasyBase {
    attributeMapping?: Record<string, string>;
    creationDate?: Date;
    idpIdentifiers?: string[];
    lastModifiedDate?: Date;
    providerDetails?: Record<string, string>;
    providerName?: string;
    providerType?: IdentityProviderTypeTypeEnum;
    userPoolId?: string;
}
