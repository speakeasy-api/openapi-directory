package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FederationParameters
 * Configuration information when authentication mode is FEDERATED.
**/
public class FederationParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationCallBackURL")
    public String applicationCallBackURL;
    public FederationParameters withApplicationCallBackUrl(String applicationCallBackURL) {
        this.applicationCallBackURL = applicationCallBackURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeMap")
    public java.util.Map<String, String> attributeMap;
    public FederationParameters withAttributeMap(java.util.Map<String, String> attributeMap) {
        this.attributeMap = attributeMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationProviderName")
    public String federationProviderName;
    public FederationParameters withFederationProviderName(String federationProviderName) {
        this.federationProviderName = federationProviderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationURN")
    public String federationURN;
    public FederationParameters withFederationUrn(String federationURN) {
        this.federationURN = federationURN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlMetadataDocument")
    public String samlMetadataDocument;
    public FederationParameters withSamlMetadataDocument(String samlMetadataDocument) {
        this.samlMetadataDocument = samlMetadataDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlMetadataURL")
    public String samlMetadataURL;
    public FederationParameters withSamlMetadataUrl(String samlMetadataURL) {
        this.samlMetadataURL = samlMetadataURL;
        return this;
    }
}