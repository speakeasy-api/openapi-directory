package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IssueEventMilestone
 * Issue Event Milestone
**/
public class IssueEventMilestone {
    @JsonProperty("title")
    public String title;
    public IssueEventMilestone withTitle(String title) {
        this.title = title;
        return this;
    }
}