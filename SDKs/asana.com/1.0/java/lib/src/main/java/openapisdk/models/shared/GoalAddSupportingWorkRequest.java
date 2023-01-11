package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GoalAddSupportingWorkRequest {
    @JsonProperty("supporting_work")
    public String supportingWork;
    public GoalAddSupportingWorkRequest withSupportingWork(String supportingWork) {
        this.supportingWork = supportingWork;
        return this;
    }
}