import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthenticationRequest } from "./certificateauthenticationrequest";
import { ClientVpnAuthenticationTypeEnum } from "./clientvpnauthenticationtypeenum";
import { DirectoryServiceAuthenticationRequest } from "./directoryserviceauthenticationrequest";
import { FederatedAuthenticationRequest } from "./federatedauthenticationrequest";
/**
 * Describes the authentication method to be used by a Client VPN endpoint. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication">Authentication</a> in the <i>Client VPN Administrator Guide</i>.
 */
export declare class ClientVpnAuthenticationRequest extends SpeakeasyBase {
    activeDirectory?: DirectoryServiceAuthenticationRequest;
    federatedAuthentication?: FederatedAuthenticationRequest;
    mutualAuthentication?: CertificateAuthenticationRequest;
    type?: ClientVpnAuthenticationTypeEnum;
}
