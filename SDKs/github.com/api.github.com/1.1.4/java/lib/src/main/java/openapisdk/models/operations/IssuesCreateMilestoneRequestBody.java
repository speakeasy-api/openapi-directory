package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesCreateMilestoneRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public IssuesCreateMilestoneRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_on")
    public String dueOn;
    public IssuesCreateMilestoneRequestBody withDueOn(String dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public IssuesCreateMilestoneRequestBodyStateEnum state;
    public IssuesCreateMilestoneRequestBody withState(IssuesCreateMilestoneRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public IssuesCreateMilestoneRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}