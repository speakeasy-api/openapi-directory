package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Rule {
    @JsonProperty("config")
    public String config;
    public Rule withConfig(String config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RuleTypeEnum type;
    public Rule withType(RuleTypeEnum type) {
        this.type = type;
        return this;
    }
}