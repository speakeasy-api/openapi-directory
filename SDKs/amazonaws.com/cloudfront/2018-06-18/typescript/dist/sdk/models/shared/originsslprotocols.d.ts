import { SpeakeasyBase } from "../../../internal/utils";
import { SslProtocolsListEnum } from "./sslprotocolslistenum";
/**
 * A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.
 */
export declare class OriginSslProtocols extends SpeakeasyBase {
    items: SslProtocolsListEnum[];
    quantity: number;
}
