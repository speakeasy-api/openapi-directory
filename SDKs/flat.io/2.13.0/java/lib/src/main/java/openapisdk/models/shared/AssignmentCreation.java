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
 * AssignmentCreation
 * Assignment creation details
**/
public class AssignmentCreation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedStudents")
    public String[] assignedStudents;
    public AssignmentCreation withAssignedStudents(String[] assignedStudents) {
        this.assignedStudents = assignedStudents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigneeMode")
    public AssignmentCreationAssigneeModeEnum assigneeMode;
    public AssignmentCreation withAssigneeMode(AssignmentCreationAssigneeModeEnum assigneeMode) {
        this.assigneeMode = assigneeMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public ClassAttachmentCreation[] attachments;
    public AssignmentCreation withAttachments(ClassAttachmentCreation[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover")
    public String cover;
    public AssignmentCreation withCover(String cover) {
        this.cover = cover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverFile")
    public String coverFile;
    public AssignmentCreation withCoverFile(String coverFile) {
        this.coverFile = coverFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AssignmentCreation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dueDate")
    public OffsetDateTime dueDate;
    public AssignmentCreation withDueDate(OffsetDateTime dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleClassroom")
    public AssignmentCreationGoogleClassroom googleClassroom;
    public AssignmentCreation withGoogleClassroom(AssignmentCreationGoogleClassroom googleClassroom) {
        this.googleClassroom = googleClassroom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPoints")
    public Double maxPoints;
    public AssignmentCreation withMaxPoints(Double maxPoints) {
        this.maxPoints = maxPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsoftGraph")
    public AssignmentCreationMicrosoftGraph microsoftGraph;
    public AssignmentCreation withMicrosoftGraph(AssignmentCreationMicrosoftGraph microsoftGraph) {
        this.microsoftGraph = microsoftGraph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nbPlaybackAuthorized")
    public Double nbPlaybackAuthorized;
    public AssignmentCreation withNbPlaybackAuthorized(Double nbPlaybackAuthorized) {
        this.nbPlaybackAuthorized = nbPlaybackAuthorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("scheduledDate")
    public OffsetDateTime scheduledDate;
    public AssignmentCreation withScheduledDate(OffsetDateTime scheduledDate) {
        this.scheduledDate = scheduledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AssignmentCreationStateEnum state;
    public AssignmentCreation withState(AssignmentCreationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AssignmentCreation withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toolset")
    public String toolset;
    public AssignmentCreation withToolset(String toolset) {
        this.toolset = toolset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AssignmentTypeEnum type;
    public AssignmentCreation withType(AssignmentTypeEnum type) {
        this.type = type;
        return this;
    }
}