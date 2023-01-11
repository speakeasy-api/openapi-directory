import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mutual TLS authentication configuration for a custom domain name.
**/
export declare class CreateDomainNameResponseMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: Record<string, any>;
    truststoreVersion?: Record<string, any>;
    truststoreWarnings?: Record<string, any>;
}
export declare class CreateDomainNameResponse extends SpeakeasyBase {
    apiMappingSelectionExpression?: Record<string, any>;
    domainName?: Record<string, any>;
    domainNameConfigurations?: Record<string, any>;
    mutualTlsAuthentication?: CreateDomainNameResponseMutualTlsAuthentication;
    tags?: Record<string, string>;
}
