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
 * AssignmentSubmissionHistory
 * History item of the submission
**/
public class AssignmentSubmissionHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment")
    public AssignmentSubmissionHistoryAttachment attachment;
    public AssignmentSubmissionHistory withAttachment(AssignmentSubmissionHistoryAttachment attachment) {
        this.attachment = attachment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public AssignmentSubmissionHistory withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draftGrade")
    public Double draftGrade;
    public AssignmentSubmissionHistory withDraftGrade(Double draftGrade) {
        this.draftGrade = draftGrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grade")
    public Double grade;
    public AssignmentSubmissionHistory withGrade(Double grade) {
        this.grade = grade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPoints")
    public Double maxPoints;
    public AssignmentSubmissionHistory withMaxPoints(Double maxPoints) {
        this.maxPoints = maxPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AssignmentSubmissionStateEnum state;
    public AssignmentSubmissionHistory withState(AssignmentSubmissionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public String[] users;
    public AssignmentSubmissionHistory withUsers(String[] users) {
        this.users = users;
        return this;
    }
}