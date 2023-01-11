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
 * AssignmentCopy
 * Assignment copy operation
**/
public class AssignmentCopy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment")
    public String assignment;
    public AssignmentCopy withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classroom")
    public String classroom;
    public AssignmentCopy withClassroom(String classroom) {
        this.classroom = classroom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduledDate")
    public OffsetDateTime scheduledDate;
    public AssignmentCopy withScheduledDate(OffsetDateTime scheduledDate) {
        this.scheduledDate = scheduledDate;
        return this;
    }
}