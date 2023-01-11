package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StatefulRuleGroupReference
 * Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group. 
**/
public class StatefulRuleGroupReference {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public StatefulRuleGroupReference withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}