import { SpeakeasyBase } from "../../../internal/utils";
import { DomainNameConfiguration } from "./domainnameconfiguration";
/**
 * The mutual TLS authentication configuration for a custom domain name.
 */
export declare class CreateDomainNameResponseMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: string;
    truststoreVersion?: string;
    truststoreWarnings?: string[];
}
/**
 * Success
 */
export declare class CreateDomainNameResponse extends SpeakeasyBase {
    apiMappingSelectionExpression?: string;
    domainName?: string;
    domainNameConfigurations?: DomainNameConfiguration[];
    mutualTlsAuthentication?: CreateDomainNameResponseMutualTlsAuthentication;
    tags?: Record<string, string>;
}
