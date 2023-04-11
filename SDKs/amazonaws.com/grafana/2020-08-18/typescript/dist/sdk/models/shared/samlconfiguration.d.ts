import { SpeakeasyBase } from "../../../internal/utils";
import { AssertionAttributes } from "./assertionattributes";
import { IdpMetadata } from "./idpmetadata";
import { RoleValues } from "./rolevalues";
/**
 * A structure containing information about how this workspace works with SAML.
 */
export declare class SamlConfiguration extends SpeakeasyBase {
    allowedOrganizations?: string[];
    assertionAttributes?: AssertionAttributes;
    idpMetadata: IdpMetadata;
    loginValidityDuration?: number;
    roleValues?: RoleValues;
}
