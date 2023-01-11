package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UrlRewritingRulesSerializer {
    @JsonProperty("rules")
    public RewritingRuleSerializer[] rules;
    public UrlRewritingRulesSerializer withRules(RewritingRuleSerializer[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonProperty("urls")
    public String[] urls;
    public UrlRewritingRulesSerializer withUrls(String[] urls) {
        this.urls = urls;
        return this;
    }
}