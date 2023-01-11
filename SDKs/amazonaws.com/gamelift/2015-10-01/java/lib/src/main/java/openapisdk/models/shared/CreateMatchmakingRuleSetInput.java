package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateMatchmakingRuleSetInput
 * Represents the input for a request operation.
**/
public class CreateMatchmakingRuleSetInput {
    @JsonProperty("Name")
    public String name;
    public CreateMatchmakingRuleSetInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RuleSetBody")
    public String ruleSetBody;
    public CreateMatchmakingRuleSetInput withRuleSetBody(String ruleSetBody) {
        this.ruleSetBody = ruleSetBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateMatchmakingRuleSetInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}