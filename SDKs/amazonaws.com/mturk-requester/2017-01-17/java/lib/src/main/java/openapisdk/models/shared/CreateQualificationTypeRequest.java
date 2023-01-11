package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateQualificationTypeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnswerKey")
    public String answerKey;
    public CreateQualificationTypeRequest withAnswerKey(String answerKey) {
        this.answerKey = answerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoGranted")
    public Boolean autoGranted;
    public CreateQualificationTypeRequest withAutoGranted(Boolean autoGranted) {
        this.autoGranted = autoGranted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoGrantedValue")
    public Long autoGrantedValue;
    public CreateQualificationTypeRequest withAutoGrantedValue(Long autoGrantedValue) {
        this.autoGrantedValue = autoGrantedValue;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public CreateQualificationTypeRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keywords")
    public String keywords;
    public CreateQualificationTypeRequest withKeywords(String keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateQualificationTypeRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("QualificationTypeStatus")
    public QualificationTypeStatusEnum qualificationTypeStatus;
    public CreateQualificationTypeRequest withQualificationTypeStatus(QualificationTypeStatusEnum qualificationTypeStatus) {
        this.qualificationTypeStatus = qualificationTypeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryDelayInSeconds")
    public Long retryDelayInSeconds;
    public CreateQualificationTypeRequest withRetryDelayInSeconds(Long retryDelayInSeconds) {
        this.retryDelayInSeconds = retryDelayInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Test")
    public String test;
    public CreateQualificationTypeRequest withTest(String test) {
        this.test = test;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TestDurationInSeconds")
    public Long testDurationInSeconds;
    public CreateQualificationTypeRequest withTestDurationInSeconds(Long testDurationInSeconds) {
        this.testDurationInSeconds = testDurationInSeconds;
        return this;
    }
}