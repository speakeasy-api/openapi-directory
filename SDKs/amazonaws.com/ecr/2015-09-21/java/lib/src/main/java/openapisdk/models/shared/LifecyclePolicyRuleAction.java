package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifecyclePolicyRuleAction
 * The type of action to be taken.
**/
public class LifecyclePolicyRuleAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ImageActionTypeEnum type;
    public LifecyclePolicyRuleAction withType(ImageActionTypeEnum type) {
        this.type = type;
        return this;
    }
}