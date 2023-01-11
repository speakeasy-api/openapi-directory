package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEnvironmentRequestBodyFederationParameters
 * Configuration information when authentication mode is FEDERATED.
**/
public class CreateEnvironmentRequestBodyFederationParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationCallBackURL")
    public String applicationCallBackURL;
    public CreateEnvironmentRequestBodyFederationParameters withApplicationCallBackUrl(String applicationCallBackURL) {
        this.applicationCallBackURL = applicationCallBackURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeMap")
    public java.util.Map<String, String> attributeMap;
    public CreateEnvironmentRequestBodyFederationParameters withAttributeMap(java.util.Map<String, String> attributeMap) {
        this.attributeMap = attributeMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationProviderName")
    public String federationProviderName;
    public CreateEnvironmentRequestBodyFederationParameters withFederationProviderName(String federationProviderName) {
        this.federationProviderName = federationProviderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationURN")
    public String federationURN;
    public CreateEnvironmentRequestBodyFederationParameters withFederationUrn(String federationURN) {
        this.federationURN = federationURN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlMetadataDocument")
    public String samlMetadataDocument;
    public CreateEnvironmentRequestBodyFederationParameters withSamlMetadataDocument(String samlMetadataDocument) {
        this.samlMetadataDocument = samlMetadataDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlMetadataURL")
    public String samlMetadataURL;
    public CreateEnvironmentRequestBodyFederationParameters withSamlMetadataUrl(String samlMetadataURL) {
        this.samlMetadataURL = samlMetadataURL;
        return this;
    }
}