import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about additional options for the domain endpoint.
 */
export declare class AwsOpenSearchServiceDomainDomainEndpointOptionsDetails extends SpeakeasyBase {
    customEndpoint?: string;
    customEndpointCertificateArn?: string;
    customEndpointEnabled?: boolean;
    enforceHTTPS?: boolean;
    tlsSecurityPolicy?: string;
}
