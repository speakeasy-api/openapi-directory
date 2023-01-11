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
 * AssessmentRun
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
**/
public class AssessmentRun {
    @JsonProperty("arn")
    public String arn;
    public AssessmentRun withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("assessmentTemplateArn")
    public String assessmentTemplateArn;
    public AssessmentRun withAssessmentTemplateArn(String assessmentTemplateArn) {
        this.assessmentTemplateArn = assessmentTemplateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completedAt")
    public OffsetDateTime completedAt;
    public AssessmentRun withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public AssessmentRun withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("dataCollected")
    public Boolean dataCollected;
    public AssessmentRun withDataCollected(Boolean dataCollected) {
        this.dataCollected = dataCollected;
        return this;
    }
    @JsonProperty("durationInSeconds")
    public Long durationInSeconds;
    public AssessmentRun withDurationInSeconds(Long durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        return this;
    }
    @JsonProperty("findingCounts")
    public java.util.Map<String, Long> findingCounts;
    public AssessmentRun withFindingCounts(java.util.Map<String, Long> findingCounts) {
        this.findingCounts = findingCounts;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssessmentRun withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("notifications")
    public AssessmentRunNotification[] notifications;
    public AssessmentRun withNotifications(AssessmentRunNotification[] notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonProperty("rulesPackageArns")
    public String[] rulesPackageArns;
    public AssessmentRun withRulesPackageArns(String[] rulesPackageArns) {
        this.rulesPackageArns = rulesPackageArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startedAt")
    public OffsetDateTime startedAt;
    public AssessmentRun withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonProperty("state")
    public AssessmentRunStateEnum state;
    public AssessmentRun withState(AssessmentRunStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("stateChangedAt")
    public OffsetDateTime stateChangedAt;
    public AssessmentRun withStateChangedAt(OffsetDateTime stateChangedAt) {
        this.stateChangedAt = stateChangedAt;
        return this;
    }
    @JsonProperty("stateChanges")
    public AssessmentRunStateChange[] stateChanges;
    public AssessmentRun withStateChanges(AssessmentRunStateChange[] stateChanges) {
        this.stateChanges = stateChanges;
        return this;
    }
    @JsonProperty("userAttributesForFindings")
    public Attribute[] userAttributesForFindings;
    public AssessmentRun withUserAttributesForFindings(Attribute[] userAttributesForFindings) {
        this.userAttributesForFindings = userAttributesForFindings;
        return this;
    }
}