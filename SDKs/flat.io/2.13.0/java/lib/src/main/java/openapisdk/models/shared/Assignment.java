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
 * Assignment
 * Assignment details
**/
public class Assignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public MediaAttachment[] attachments;
    public Assignment withAttachments(MediaAttachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canvas")
    public AssignmentCanvas canvas;
    public Assignment withCanvas(AssignmentCanvas canvas) {
        this.canvas = canvas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classroom")
    public String classroom;
    public Assignment withClassroom(String classroom) {
        this.classroom = classroom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover")
    public String cover;
    public Assignment withCover(String cover) {
        this.cover = cover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverFile")
    public String coverFile;
    public Assignment withCoverFile(String coverFile) {
        this.coverFile = coverFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public Assignment withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public String creator;
    public Assignment withCreator(String creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Assignment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dueDate")
    public OffsetDateTime dueDate;
    public Assignment withDueDate(OffsetDateTime dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleClassroom")
    public GoogleClassroomCoursework googleClassroom;
    public Assignment withGoogleClassroom(GoogleClassroomCoursework googleClassroom) {
        this.googleClassroom = googleClassroom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lti")
    public AssignmentLti lti;
    public Assignment withLti(AssignmentLti lti) {
        this.lti = lti;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPoints")
    public Double maxPoints;
    public Assignment withMaxPoints(Double maxPoints) {
        this.maxPoints = maxPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfc")
    public AssignmentMfc mfc;
    public Assignment withMfc(AssignmentMfc mfc) {
        this.mfc = mfc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsoftGraph")
    public MicrosoftGraphAssignment microsoftGraph;
    public Assignment withMicrosoftGraph(MicrosoftGraphAssignment microsoftGraph) {
        this.microsoftGraph = microsoftGraph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduledDate")
    public OffsetDateTime scheduledDate;
    public Assignment withScheduledDate(OffsetDateTime scheduledDate) {
        this.scheduledDate = scheduledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AssignmentStateEnum state;
    public Assignment withState(AssignmentStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submissions")
    public AssignmentSubmission[] submissions;
    public Assignment withSubmissions(AssignmentSubmission[] submissions) {
        this.submissions = submissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Assignment withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AssignmentTypeEnum type;
    public Assignment withType(AssignmentTypeEnum type) {
        this.type = type;
        return this;
    }
}