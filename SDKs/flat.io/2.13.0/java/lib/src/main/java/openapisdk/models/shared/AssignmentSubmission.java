package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignmentSubmission
 * Assignment Submission
**/
public class AssignmentSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment")
    public String assignment;
    public AssignmentSubmission withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public MediaAttachment[] attachments;
    public AssignmentSubmission withAttachments(MediaAttachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classroom")
    public String classroom;
    public AssignmentSubmission withClassroom(String classroom) {
        this.classroom = classroom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public AssignmentSubmission withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public String creator;
    public AssignmentSubmission withCreator(String creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draftGrade")
    public Double draftGrade;
    public AssignmentSubmission withDraftGrade(Double draftGrade) {
        this.draftGrade = draftGrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleClassroom")
    public GoogleClassroomSubmission googleClassroom;
    public AssignmentSubmission withGoogleClassroom(GoogleClassroomSubmission googleClassroom) {
        this.googleClassroom = googleClassroom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grade")
    public Double grade;
    public AssignmentSubmission withGrade(Double grade) {
        this.grade = grade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssignmentSubmission withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPoints")
    public Double maxPoints;
    public AssignmentSubmission withMaxPoints(Double maxPoints) {
        this.maxPoints = maxPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsoftGraph")
    public MicrosoftGraphSubmission microsoftGraph;
    public AssignmentSubmission withMicrosoftGraph(MicrosoftGraphSubmission microsoftGraph) {
        this.microsoftGraph = microsoftGraph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnCreator")
    public String returnCreator;
    public AssignmentSubmission withReturnCreator(String returnCreator) {
        this.returnCreator = returnCreator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnDate")
    public String returnDate;
    public AssignmentSubmission withReturnDate(String returnDate) {
        this.returnDate = returnDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AssignmentSubmissionStateEnum state;
    public AssignmentSubmission withState(AssignmentSubmissionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submissionDate")
    public String submissionDate;
    public AssignmentSubmission withSubmissionDate(String submissionDate) {
        this.submissionDate = submissionDate;
        return this;
    }
}