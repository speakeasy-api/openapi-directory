package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SapoDataConnectorProfileProperties
 *  The connector-specific profile properties required when using SAPOData. 
**/
public class SapoDataConnectorProfileProperties {
    @JsonProperty("applicationHostUrl")
    public String applicationHostUrl;
    public SapoDataConnectorProfileProperties withApplicationHostUrl(String applicationHostUrl) {
        this.applicationHostUrl = applicationHostUrl;
        return this;
    }
    @JsonProperty("applicationServicePath")
    public String applicationServicePath;
    public SapoDataConnectorProfileProperties withApplicationServicePath(String applicationServicePath) {
        this.applicationServicePath = applicationServicePath;
        return this;
    }
    @JsonProperty("clientNumber")
    public String clientNumber;
    public SapoDataConnectorProfileProperties withClientNumber(String clientNumber) {
        this.clientNumber = clientNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logonLanguage")
    public String logonLanguage;
    public SapoDataConnectorProfileProperties withLogonLanguage(String logonLanguage) {
        this.logonLanguage = logonLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oAuthProperties")
    public OAuthProperties oAuthProperties;
    public SapoDataConnectorProfileProperties withOAuthProperties(OAuthProperties oAuthProperties) {
        this.oAuthProperties = oAuthProperties;
        return this;
    }
    @JsonProperty("portNumber")
    public Long portNumber;
    public SapoDataConnectorProfileProperties withPortNumber(Long portNumber) {
        this.portNumber = portNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateLinkServiceName")
    public String privateLinkServiceName;
    public SapoDataConnectorProfileProperties withPrivateLinkServiceName(String privateLinkServiceName) {
        this.privateLinkServiceName = privateLinkServiceName;
        return this;
    }
}