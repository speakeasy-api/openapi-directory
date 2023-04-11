import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>KMS uses the authentication credential to sign requests that it sends to the external key store proxy (XKS proxy) on your behalf. You establish these credentials on your external key store proxy and report them to KMS.</p> <p>The <code>XksProxyAuthenticationCredential</code> includes two required elements.</p>
 */
export declare class XksProxyAuthenticationCredentialType extends SpeakeasyBase {
    accessKeyId: string;
    rawSecretAccessKey: string;
}
