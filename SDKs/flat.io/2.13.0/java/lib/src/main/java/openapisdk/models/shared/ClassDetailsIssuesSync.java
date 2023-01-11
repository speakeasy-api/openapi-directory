package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassDetailsIssuesSync
 * A sync issue
**/
public class ClassDetailsIssuesSync {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ClassDetailsIssuesSync withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ClassDetailsIssuesSync withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public ClassDetailsIssuesSyncReasonEnum reason;
    public ClassDetailsIssuesSync withReason(ClassDetailsIssuesSyncReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}