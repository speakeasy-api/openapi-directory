import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationProviderTypesEnum } from "./authenticationprovidertypesenum";
import { SamlConfigurationStatusEnum } from "./samlconfigurationstatusenum";
/**
 * A structure that describes whether the workspace uses SAML, IAM Identity Center, or both methods for user authentication, and whether that authentication is fully configured.
 */
export declare class AuthenticationSummary extends SpeakeasyBase {
    providers: AuthenticationProviderTypesEnum[];
    samlConfigurationStatus?: SamlConfigurationStatusEnum;
}
