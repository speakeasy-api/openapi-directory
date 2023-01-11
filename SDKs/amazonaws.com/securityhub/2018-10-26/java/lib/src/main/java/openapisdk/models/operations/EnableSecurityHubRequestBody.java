package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnableSecurityHubRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableDefaultStandards")
    public Boolean enableDefaultStandards;
    public EnableSecurityHubRequestBody withEnableDefaultStandards(Boolean enableDefaultStandards) {
        this.enableDefaultStandards = enableDefaultStandards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public EnableSecurityHubRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}