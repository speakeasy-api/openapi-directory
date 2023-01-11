import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mutual TLS authentication configuration for a custom domain name.
**/
export declare class GetDomainNameResponseMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: Record<string, any>;
    truststoreVersion?: Record<string, any>;
    truststoreWarnings?: Record<string, any>;
}
export declare class GetDomainNameResponse extends SpeakeasyBase {
    apiMappingSelectionExpression?: Record<string, any>;
    domainName?: Record<string, any>;
    domainNameConfigurations?: Record<string, any>;
    mutualTlsAuthentication?: GetDomainNameResponseMutualTlsAuthentication;
    tags?: Record<string, string>;
}
