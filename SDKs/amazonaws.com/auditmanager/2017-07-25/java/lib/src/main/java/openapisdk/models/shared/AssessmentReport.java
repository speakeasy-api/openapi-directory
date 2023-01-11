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
 * AssessmentReport
 *  A finalized document generated from an Audit Manager assessment. These reports summarize the relevant evidence collected for your audit, and link to the relevant evidence folders which are named and organized according to the controls specified in your assessment. 
**/
public class AssessmentReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentId")
    public String assessmentId;
    public AssessmentReport withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentName")
    public String assessmentName;
    public AssessmentReport withAssessmentName(String assessmentName) {
        this.assessmentName = assessmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public AssessmentReport withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsAccountId")
    public String awsAccountId;
    public AssessmentReport withAwsAccountId(String awsAccountId) {
        this.awsAccountId = awsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public AssessmentReport withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AssessmentReport withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssessmentReport withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AssessmentReport withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AssessmentReportStatusEnum status;
    public AssessmentReport withStatus(AssessmentReportStatusEnum status) {
        this.status = status;
        return this;
    }
}