package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleOption
 * Additional settings for a stateful rule. This is part of the <a>StatefulRule</a> configuration.
**/
public class RuleOption {
    @JsonProperty("Keyword")
    public String keyword;
    public RuleOption withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public String[] settings;
    public RuleOption withSettings(String[] settings) {
        this.settings = settings;
        return this;
    }
}