package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AzureFunctionRulePatchTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("azureAppId")
    public String azureAppId;
    public AzureFunctionRulePatchTarget withAzureAppId(String azureAppId) {
        this.azureAppId = azureAppId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("azureFunctionName")
    public String azureFunctionName;
    public AzureFunctionRulePatchTarget withAzureFunctionName(String azureFunctionName) {
        this.azureFunctionName = azureFunctionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AzureFunctionRulePatchTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public AzureFunctionRulePatchTargetFormatEnum format;
    public AzureFunctionRulePatchTarget withFormat(AzureFunctionRulePatchTargetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public AzureFunctionRulePatchTargetHeaders[] headers;
    public AzureFunctionRulePatchTarget withHeaders(AzureFunctionRulePatchTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public AzureFunctionRulePatchTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
}