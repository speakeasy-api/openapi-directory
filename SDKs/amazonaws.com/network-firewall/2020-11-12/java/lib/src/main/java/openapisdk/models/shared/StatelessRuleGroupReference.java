package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StatelessRuleGroupReference
 * Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group. 
**/
public class StatelessRuleGroupReference {
    @JsonProperty("Priority")
    public Long priority;
    public StatelessRuleGroupReference withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public StatelessRuleGroupReference withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}