package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssuesRemoveAssigneesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignees")
    public String[] assignees;
    public IssuesRemoveAssigneesRequestBody withAssignees(String[] assignees) {
        this.assignees = assignees;
        return this;
    }
}