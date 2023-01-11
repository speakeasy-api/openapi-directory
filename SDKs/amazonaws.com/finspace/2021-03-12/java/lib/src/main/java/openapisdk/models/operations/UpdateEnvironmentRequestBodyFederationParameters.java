package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEnvironmentRequestBodyFederationParameters
 * Configuration information when authentication mode is FEDERATED.
**/
public class UpdateEnvironmentRequestBodyFederationParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationCallBackURL")
    public String applicationCallBackURL;
    public UpdateEnvironmentRequestBodyFederationParameters withApplicationCallBackUrl(String applicationCallBackURL) {
        this.applicationCallBackURL = applicationCallBackURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeMap")
    public java.util.Map<String, String> attributeMap;
    public UpdateEnvironmentRequestBodyFederationParameters withAttributeMap(java.util.Map<String, String> attributeMap) {
        this.attributeMap = attributeMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationProviderName")
    public String federationProviderName;
    public UpdateEnvironmentRequestBodyFederationParameters withFederationProviderName(String federationProviderName) {
        this.federationProviderName = federationProviderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federationURN")
    public String federationURN;
    public UpdateEnvironmentRequestBodyFederationParameters withFederationUrn(String federationURN) {
        this.federationURN = federationURN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlMetadataDocument")
    public String samlMetadataDocument;
    public UpdateEnvironmentRequestBodyFederationParameters withSamlMetadataDocument(String samlMetadataDocument) {
        this.samlMetadataDocument = samlMetadataDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samlMetadataURL")
    public String samlMetadataURL;
    public UpdateEnvironmentRequestBodyFederationParameters withSamlMetadataUrl(String samlMetadataURL) {
        this.samlMetadataURL = samlMetadataURL;
        return this;
    }
}