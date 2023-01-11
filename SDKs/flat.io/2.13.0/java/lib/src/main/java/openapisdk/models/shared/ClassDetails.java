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
 * ClassDetails
 * A classroom
**/
public class ClassDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignmentsCount")
    public Double assignmentsCount;
    public ClassDetails withAssignmentsCount(Double assignmentsCount) {
        this.assignmentsCount = assignmentsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canvas")
    public ClassDetailsCanvas canvas;
    public ClassDetails withCanvas(ClassDetailsCanvas canvas) {
        this.canvas = canvas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clever")
    public ClassDetailsClever clever;
    public ClassDetails withClever(ClassDetailsClever clever) {
        this.clever = clever;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public ClassDetails withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ClassDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrollmentCode")
    public String enrollmentCode;
    public ClassDetails withEnrollmentCode(String enrollmentCode) {
        this.enrollmentCode = enrollmentCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleClassroom")
    public ClassDetailsGoogleClassroom googleClassroom;
    public ClassDetails withGoogleClassroom(ClassDetailsGoogleClassroom googleClassroom) {
        this.googleClassroom = googleClassroom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleDrive")
    public ClassDetailsGoogleDrive googleDrive;
    public ClassDetails withGoogleDrive(ClassDetailsGoogleDrive googleDrive) {
        this.googleDrive = googleDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ClassDetails withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public ClassDetailsIssues issues;
    public ClassDetails withIssues(ClassDetailsIssues issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lti")
    public ClassDetailsLti lti;
    public ClassDetails withLti(ClassDetailsLti lti) {
        this.lti = lti;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfc")
    public ClassDetailsMfc mfc;
    public ClassDetails withMfc(ClassDetailsMfc mfc) {
        this.mfc = mfc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsoftGraph")
    public ClassDetailsMicrosoftGraph microsoftGraph;
    public ClassDetails withMicrosoftGraph(ClassDetailsMicrosoftGraph microsoftGraph) {
        this.microsoftGraph = microsoftGraph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ClassDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public ClassDetails withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public ClassDetails withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public String section;
    public ClassDetails withSection(String section) {
        this.section = section;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ClassStateEnum state;
    public ClassDetails withState(ClassStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studentsGroup")
    public GroupDetails studentsGroup;
    public ClassDetails withStudentsGroup(GroupDetails studentsGroup) {
        this.studentsGroup = studentsGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teachersGroup")
    public GroupDetails teachersGroup;
    public ClassDetails withTeachersGroup(GroupDetails teachersGroup) {
        this.teachersGroup = teachersGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public String theme;
    public ClassDetails withTheme(String theme) {
        this.theme = theme;
        return this;
    }
}