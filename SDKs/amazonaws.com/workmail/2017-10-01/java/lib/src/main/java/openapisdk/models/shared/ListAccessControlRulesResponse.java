package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccessControlRulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rules")
    public AccessControlRule[] rules;
    public ListAccessControlRulesResponse withRules(AccessControlRule[] rules) {
        this.rules = rules;
        return this;
    }
}