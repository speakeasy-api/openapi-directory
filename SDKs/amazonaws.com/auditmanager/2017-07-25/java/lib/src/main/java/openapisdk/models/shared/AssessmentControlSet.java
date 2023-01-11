package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssessmentControlSet
 *  Represents a set of controls in an Audit Manager assessment. 
**/
public class AssessmentControlSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controls")
    public AssessmentControl[] controls;
    public AssessmentControlSet withControls(AssessmentControl[] controls) {
        this.controls = controls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegations")
    public Delegation[] delegations;
    public AssessmentControlSet withDelegations(Delegation[] delegations) {
        this.delegations = delegations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AssessmentControlSet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssessmentControlSet withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualEvidenceCount")
    public Long manualEvidenceCount;
    public AssessmentControlSet withManualEvidenceCount(Long manualEvidenceCount) {
        this.manualEvidenceCount = manualEvidenceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public Role[] roles;
    public AssessmentControlSet withRoles(Role[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ControlSetStatusEnum status;
    public AssessmentControlSet withStatus(ControlSetStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemEvidenceCount")
    public Long systemEvidenceCount;
    public AssessmentControlSet withSystemEvidenceCount(Long systemEvidenceCount) {
        this.systemEvidenceCount = systemEvidenceCount;
        return this;
    }
}