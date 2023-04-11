import { SpeakeasyBase } from "../../../internal/utils";
import { CustomKeyStoreTypeEnum } from "./customkeystoretypeenum";
import { XksProxyAuthenticationCredentialType } from "./xksproxyauthenticationcredentialtype";
import { XksProxyConnectivityTypeEnum } from "./xksproxyconnectivitytypeenum";
export declare class CreateCustomKeyStoreRequest extends SpeakeasyBase {
    cloudHsmClusterId?: string;
    customKeyStoreName: string;
    customKeyStoreType?: CustomKeyStoreTypeEnum;
    keyStorePassword?: string;
    trustAnchorCertificate?: string;
    xksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType;
    xksProxyConnectivity?: XksProxyConnectivityTypeEnum;
    xksProxyUriEndpoint?: string;
    xksProxyUriPath?: string;
    xksProxyVpcEndpointServiceName?: string;
}
