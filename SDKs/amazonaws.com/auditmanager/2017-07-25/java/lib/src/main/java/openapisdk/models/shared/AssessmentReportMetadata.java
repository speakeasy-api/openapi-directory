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
 * AssessmentReportMetadata
 *  The metadata objects associated with the specified assessment report. 
**/
public class AssessmentReportMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentId")
    public String assessmentId;
    public AssessmentReportMetadata withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentName")
    public String assessmentName;
    public AssessmentReportMetadata withAssessmentName(String assessmentName) {
        this.assessmentName = assessmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public AssessmentReportMetadata withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public AssessmentReportMetadata withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AssessmentReportMetadata withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssessmentReportMetadata withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AssessmentReportMetadata withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AssessmentReportStatusEnum status;
    public AssessmentReportMetadata withStatus(AssessmentReportStatusEnum status) {
        this.status = status;
        return this;
    }
}