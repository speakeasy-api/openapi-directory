package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WafOverrideAction
 * Details about an override action for a rule.
**/
public class WafOverrideAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public WafOverrideAction withType(String type) {
        this.type = type;
        return this;
    }
}