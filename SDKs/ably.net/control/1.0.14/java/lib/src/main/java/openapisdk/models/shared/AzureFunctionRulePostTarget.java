package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AzureFunctionRulePostTarget {
    @JsonProperty("azureAppId")
    public String azureAppId;
    public AzureFunctionRulePostTarget withAzureAppId(String azureAppId) {
        this.azureAppId = azureAppId;
        return this;
    }
    @JsonProperty("azureFunctionName")
    public String azureFunctionName;
    public AzureFunctionRulePostTarget withAzureFunctionName(String azureFunctionName) {
        this.azureFunctionName = azureFunctionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AzureFunctionRulePostTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public AzureFunctionRulePostTargetFormatEnum format;
    public AzureFunctionRulePostTarget withFormat(AzureFunctionRulePostTargetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public AzureFunctionRulePostTargetHeaders[] headers;
    public AzureFunctionRulePostTarget withHeaders(AzureFunctionRulePostTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public AzureFunctionRulePostTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
}