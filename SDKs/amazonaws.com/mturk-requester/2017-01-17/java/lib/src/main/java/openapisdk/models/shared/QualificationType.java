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
 * QualificationType
 *  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. 
**/
public class QualificationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnswerKey")
    public String answerKey;
    public QualificationType withAnswerKey(String answerKey) {
        this.answerKey = answerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoGranted")
    public Boolean autoGranted;
    public QualificationType withAutoGranted(Boolean autoGranted) {
        this.autoGranted = autoGranted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoGrantedValue")
    public Long autoGrantedValue;
    public QualificationType withAutoGrantedValue(Long autoGrantedValue) {
        this.autoGrantedValue = autoGrantedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public QualificationType withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public QualificationType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsRequestable")
    public Boolean isRequestable;
    public QualificationType withIsRequestable(Boolean isRequestable) {
        this.isRequestable = isRequestable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keywords")
    public String keywords;
    public QualificationType withKeywords(String keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public QualificationType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationTypeId")
    public String qualificationTypeId;
    public QualificationType withQualificationTypeId(String qualificationTypeId) {
        this.qualificationTypeId = qualificationTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QualificationTypeStatus")
    public QualificationTypeStatusEnum qualificationTypeStatus;
    public QualificationType withQualificationTypeStatus(QualificationTypeStatusEnum qualificationTypeStatus) {
        this.qualificationTypeStatus = qualificationTypeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryDelayInSeconds")
    public Long retryDelayInSeconds;
    public QualificationType withRetryDelayInSeconds(Long retryDelayInSeconds) {
        this.retryDelayInSeconds = retryDelayInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Test")
    public String test;
    public QualificationType withTest(String test) {
        this.test = test;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TestDurationInSeconds")
    public Long testDurationInSeconds;
    public QualificationType withTestDurationInSeconds(Long testDurationInSeconds) {
        this.testDurationInSeconds = testDurationInSeconds;
        return this;
    }
}