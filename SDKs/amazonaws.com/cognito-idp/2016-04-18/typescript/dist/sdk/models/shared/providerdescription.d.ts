import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeTypeEnum } from "./identityprovidertypetypeenum";
/**
 * A container for IdP details.
 */
export declare class ProviderDescription extends SpeakeasyBase {
    creationDate?: Date;
    lastModifiedDate?: Date;
    providerName?: string;
    providerType?: IdentityProviderTypeTypeEnum;
}
