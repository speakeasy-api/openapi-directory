package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowStep
 * The basic building block of a workflow.
**/
public class WorkflowStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CopyStepDetails")
    public CopyStepDetails copyStepDetails;
    public WorkflowStep withCopyStepDetails(CopyStepDetails copyStepDetails) {
        this.copyStepDetails = copyStepDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomStepDetails")
    public CustomStepDetails customStepDetails;
    public WorkflowStep withCustomStepDetails(CustomStepDetails customStepDetails) {
        this.customStepDetails = customStepDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteStepDetails")
    public DeleteStepDetails deleteStepDetails;
    public WorkflowStep withDeleteStepDetails(DeleteStepDetails deleteStepDetails) {
        this.deleteStepDetails = deleteStepDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagStepDetails")
    public TagStepDetails tagStepDetails;
    public WorkflowStep withTagStepDetails(TagStepDetails tagStepDetails) {
        this.tagStepDetails = tagStepDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public WorkflowStepTypeEnum type;
    public WorkflowStep withType(WorkflowStepTypeEnum type) {
        this.type = type;
        return this;
    }
}