package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Evaluation
 * Returns information about the approval rules applied to a pull request and whether conditions have been met.
**/
public class Evaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRulesNotSatisfied")
    public String[] approvalRulesNotSatisfied;
    public Evaluation withApprovalRulesNotSatisfied(String[] approvalRulesNotSatisfied) {
        this.approvalRulesNotSatisfied = approvalRulesNotSatisfied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRulesSatisfied")
    public String[] approvalRulesSatisfied;
    public Evaluation withApprovalRulesSatisfied(String[] approvalRulesSatisfied) {
        this.approvalRulesSatisfied = approvalRulesSatisfied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved")
    public Boolean approved;
    public Evaluation withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overridden")
    public Boolean overridden;
    public Evaluation withOverridden(Boolean overridden) {
        this.overridden = overridden;
        return this;
    }
}