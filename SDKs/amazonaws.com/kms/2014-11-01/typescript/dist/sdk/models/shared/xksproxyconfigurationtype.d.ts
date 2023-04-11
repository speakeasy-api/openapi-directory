import { SpeakeasyBase } from "../../../internal/utils";
import { XksProxyConnectivityTypeEnum } from "./xksproxyconnectivitytypeenum";
/**
 * Detailed information about the external key store proxy (XKS proxy). Your external key store proxy translates KMS requests into a format that your external key manager can understand. These fields appear in a <a>DescribeCustomKeyStores</a> response only when the <code>CustomKeyStoreType</code> is <code>EXTERNAL_KEY_STORE</code>.
 */
export declare class XksProxyConfigurationType extends SpeakeasyBase {
    accessKeyId?: string;
    connectivity?: XksProxyConnectivityTypeEnum;
    uriEndpoint?: string;
    uriPath?: string;
    vpcEndpointServiceName?: string;
}
