package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventPayload {
    @JsonProperty("action")
    public String action;
    public EventPayload withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public IssueComment comment;
    public EventPayload withComment(IssueComment comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public IssueSimple issue;
    public EventPayload withIssue(IssueSimple issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public EventPayloadPages[] pages;
    public EventPayload withPages(EventPayloadPages[] pages) {
        this.pages = pages;
        return this;
    }
}