package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RewritingRuleSerializer {
    @JsonProperty("ignore_case")
    public Boolean ignoreCase;
    public RewritingRuleSerializer withIgnoreCase(Boolean ignoreCase) {
        this.ignoreCase = ignoreCase;
        return this;
    }
    @JsonProperty("regex")
    public String regex;
    public RewritingRuleSerializer withRegex(String regex) {
        this.regex = regex;
        return this;
    }
    @JsonProperty("replace")
    public String replace;
    public RewritingRuleSerializer withReplace(String replace) {
        this.replace = replace;
        return this;
    }
}