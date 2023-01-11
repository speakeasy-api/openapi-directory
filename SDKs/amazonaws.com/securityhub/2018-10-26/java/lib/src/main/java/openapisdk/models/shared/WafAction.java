package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WafAction
 * Details about the action that CloudFront or WAF takes when a web request matches the conditions in the rule. 
**/
public class WafAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public WafAction withType(String type) {
        this.type = type;
        return this;
    }
}