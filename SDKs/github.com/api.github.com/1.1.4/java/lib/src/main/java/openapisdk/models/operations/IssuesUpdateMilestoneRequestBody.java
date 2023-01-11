package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesUpdateMilestoneRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public IssuesUpdateMilestoneRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_on")
    public String dueOn;
    public IssuesUpdateMilestoneRequestBody withDueOn(String dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public IssuesUpdateMilestoneRequestBodyStateEnum state;
    public IssuesUpdateMilestoneRequestBody withState(IssuesUpdateMilestoneRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public IssuesUpdateMilestoneRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}