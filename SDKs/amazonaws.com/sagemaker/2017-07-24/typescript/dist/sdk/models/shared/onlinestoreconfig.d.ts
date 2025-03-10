import { SpeakeasyBase } from "../../../internal/utils";
import { OnlineStoreSecurityConfig } from "./onlinestoresecurityconfig";
/**
 * Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or <code>KMSKeyId</code>, for at rest data encryption. You can turn <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag at General Assembly; the default value is <code>False</code>.
 */
export declare class OnlineStoreConfig extends SpeakeasyBase {
    enableOnlineStore?: boolean;
    securityConfig?: OnlineStoreSecurityConfig;
}
