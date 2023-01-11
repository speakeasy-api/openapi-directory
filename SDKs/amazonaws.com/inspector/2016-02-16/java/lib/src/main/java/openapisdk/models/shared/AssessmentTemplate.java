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
 * AssessmentTemplate
 * Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.
**/
public class AssessmentTemplate {
    @JsonProperty("arn")
    public String arn;
    public AssessmentTemplate withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("assessmentRunCount")
    public Long assessmentRunCount;
    public AssessmentTemplate withAssessmentRunCount(Long assessmentRunCount) {
        this.assessmentRunCount = assessmentRunCount;
        return this;
    }
    @JsonProperty("assessmentTargetArn")
    public String assessmentTargetArn;
    public AssessmentTemplate withAssessmentTargetArn(String assessmentTargetArn) {
        this.assessmentTargetArn = assessmentTargetArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public AssessmentTemplate withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("durationInSeconds")
    public Long durationInSeconds;
    public AssessmentTemplate withDurationInSeconds(Long durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAssessmentRunArn")
    public String lastAssessmentRunArn;
    public AssessmentTemplate withLastAssessmentRunArn(String lastAssessmentRunArn) {
        this.lastAssessmentRunArn = lastAssessmentRunArn;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssessmentTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rulesPackageArns")
    public String[] rulesPackageArns;
    public AssessmentTemplate withRulesPackageArns(String[] rulesPackageArns) {
        this.rulesPackageArns = rulesPackageArns;
        return this;
    }
    @JsonProperty("userAttributesForFindings")
    public Attribute[] userAttributesForFindings;
    public AssessmentTemplate withUserAttributesForFindings(Attribute[] userAttributesForFindings) {
        this.userAttributesForFindings = userAttributesForFindings;
        return this;
    }
}