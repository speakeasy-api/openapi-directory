package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemediationActionWithOrder
 * An ordered list of actions you can take to remediate a violation.
**/
public class RemediationActionWithOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Order")
    public Long order;
    public RemediationActionWithOrder withOrder(Long order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemediationAction")
    public RemediationAction remediationAction;
    public RemediationActionWithOrder withRemediationAction(RemediationAction remediationAction) {
        this.remediationAction = remediationAction;
        return this;
    }
}