package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRemediationExceptionsRequest {
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public DeleteRemediationExceptionsRequest withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonProperty("ResourceKeys")
    public RemediationExceptionResourceKey[] resourceKeys;
    public DeleteRemediationExceptionsRequest withResourceKeys(RemediationExceptionResourceKey[] resourceKeys) {
        this.resourceKeys = resourceKeys;
        return this;
    }
}