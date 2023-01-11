package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRemediationConfigurationRequest {
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public DeleteRemediationConfigurationRequest withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public String resourceType;
    public DeleteRemediationConfigurationRequest withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}