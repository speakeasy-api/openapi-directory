import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDomainNameResponseMutualTlsAuthentication
/** 
 * The mutual TLS authentication configuration for a custom domain name.
**/
export class GetDomainNameResponseMutualTlsAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TruststoreUri" })
  truststoreUri?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=TruststoreVersion" })
  truststoreVersion?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=TruststoreWarnings" })
  truststoreWarnings?: Record<string, any>;
}


export class GetDomainNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiMappingSelectionExpression" })
  apiMappingSelectionExpression?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DomainNameConfigurations" })
  domainNameConfigurations?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=MutualTlsAuthentication" })
  mutualTlsAuthentication?: GetDomainNameResponseMutualTlsAuthentication;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Record<string, string>;
}
