import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.
 */
export declare class TrustStore extends SpeakeasyBase {
    associatedPortalArns?: string[];
    trustStoreArn?: string;
}
