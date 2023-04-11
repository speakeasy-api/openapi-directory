import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationProviderTypesEnum } from "./authenticationprovidertypesenum";
import { AwsSsoAuthentication } from "./awsssoauthentication";
import { SamlAuthentication } from "./samlauthentication";
/**
 * A structure containing information about the user authentication methods used by the workspace.
 */
export declare class AuthenticationDescription extends SpeakeasyBase {
    awsSso?: AwsSsoAuthentication;
    providers: AuthenticationProviderTypesEnum[];
    saml?: SamlAuthentication;
}
