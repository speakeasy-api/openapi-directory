package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AssignmentSubmissionComment
 * Feedback comment added to an assignment submission
**/
public class AssignmentSubmissionComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public AssignmentSubmissionComment withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public AssignmentSubmissionComment withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssignmentSubmissionComment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modificationDate")
    public OffsetDateTime modificationDate;
    public AssignmentSubmissionComment withModificationDate(OffsetDateTime modificationDate) {
        this.modificationDate = modificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submission")
    public String submission;
    public AssignmentSubmissionComment withSubmission(String submission) {
        this.submission = submission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unread")
    public Boolean unread;
    public AssignmentSubmissionComment withUnread(Boolean unread) {
        this.unread = unread;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public AssignmentSubmissionComment withUser(String user) {
        this.user = user;
        return this;
    }
}