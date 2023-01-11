package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignmentSubmissionUpdateComments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public AssignmentSubmissionUpdateComments withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unread")
    public Double unread;
    public AssignmentSubmissionUpdateComments withUnread(Double unread) {
        this.unread = unread;
        return this;
    }
}