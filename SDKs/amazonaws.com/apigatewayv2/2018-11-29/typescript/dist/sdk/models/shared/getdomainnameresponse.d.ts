import { SpeakeasyBase } from "../../../internal/utils";
import { DomainNameConfiguration } from "./domainnameconfiguration";
/**
 * The mutual TLS authentication configuration for a custom domain name.
 */
export declare class GetDomainNameResponseMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: string;
    truststoreVersion?: string;
    truststoreWarnings?: string[];
}
/**
 * Success
 */
export declare class GetDomainNameResponse extends SpeakeasyBase {
    apiMappingSelectionExpression?: string;
    domainName?: string;
    domainNameConfigurations?: DomainNameConfiguration[];
    mutualTlsAuthentication?: GetDomainNameResponseMutualTlsAuthentication;
    tags?: Record<string, string>;
}
