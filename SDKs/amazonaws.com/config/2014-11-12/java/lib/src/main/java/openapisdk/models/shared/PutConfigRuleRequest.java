package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutConfigRuleRequest {
    @JsonProperty("ConfigRule")
    public ConfigRule configRule;
    public PutConfigRuleRequest withConfigRule(ConfigRule configRule) {
        this.configRule = configRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public PutConfigRuleRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}