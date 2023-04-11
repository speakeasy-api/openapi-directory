import { SpeakeasyBase } from "../../../internal/utils";
import { DomainNameConfiguration } from "./domainnameconfiguration";
/**
 * The mutual TLS authentication configuration for a custom domain name.
 */
export declare class DomainNameMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: string;
    truststoreVersion?: string;
    truststoreWarnings?: string[];
}
/**
 * Represents a domain name.
 */
export declare class DomainName extends SpeakeasyBase {
    apiMappingSelectionExpression?: string;
    domainName: string;
    domainNameConfigurations?: DomainNameConfiguration[];
    mutualTlsAuthentication?: DomainNameMutualTlsAuthentication;
    tags?: Record<string, string>;
}
