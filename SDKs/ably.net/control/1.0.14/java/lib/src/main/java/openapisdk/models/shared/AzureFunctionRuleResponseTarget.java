package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AzureFunctionRuleResponseTarget {
    @JsonProperty("azureAppId")
    public String azureAppId;
    public AzureFunctionRuleResponseTarget withAzureAppId(String azureAppId) {
        this.azureAppId = azureAppId;
        return this;
    }
    @JsonProperty("azureFunctionName")
    public String azureFunctionName;
    public AzureFunctionRuleResponseTarget withAzureFunctionName(String azureFunctionName) {
        this.azureFunctionName = azureFunctionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AzureFunctionRuleResponseTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public AzureFunctionRuleResponseTargetFormatEnum format;
    public AzureFunctionRuleResponseTarget withFormat(AzureFunctionRuleResponseTargetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public AzureFunctionRuleResponseTargetHeaders[] headers;
    public AzureFunctionRuleResponseTarget withHeaders(AzureFunctionRuleResponseTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public AzureFunctionRuleResponseTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
}