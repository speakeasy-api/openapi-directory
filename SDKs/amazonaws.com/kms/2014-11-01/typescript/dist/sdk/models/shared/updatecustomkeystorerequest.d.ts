import { SpeakeasyBase } from "../../../internal/utils";
import { XksProxyAuthenticationCredentialType } from "./xksproxyauthenticationcredentialtype";
import { XksProxyConnectivityTypeEnum } from "./xksproxyconnectivitytypeenum";
export declare class UpdateCustomKeyStoreRequest extends SpeakeasyBase {
    cloudHsmClusterId?: string;
    customKeyStoreId: string;
    keyStorePassword?: string;
    newCustomKeyStoreName?: string;
    xksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType;
    xksProxyConnectivity?: XksProxyConnectivityTypeEnum;
    xksProxyUriEndpoint?: string;
    xksProxyUriPath?: string;
    xksProxyVpcEndpointServiceName?: string;
}
