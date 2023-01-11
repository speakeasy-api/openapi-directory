package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AwsJobAbortCriteria
 * The criteria that determine when and how a job abort takes place.
**/
public class AwsJobAbortCriteria {
    @JsonProperty("action")
    public AwsJobAbortCriteriaAbortActionEnum action;
    public AwsJobAbortCriteria withAction(AwsJobAbortCriteriaAbortActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("failureType")
    public AwsJobAbortCriteriaFailureTypeEnum failureType;
    public AwsJobAbortCriteria withFailureType(AwsJobAbortCriteriaFailureTypeEnum failureType) {
        this.failureType = failureType;
        return this;
    }
    @JsonProperty("minNumberOfExecutedThings")
    public Long minNumberOfExecutedThings;
    public AwsJobAbortCriteria withMinNumberOfExecutedThings(Long minNumberOfExecutedThings) {
        this.minNumberOfExecutedThings = minNumberOfExecutedThings;
        return this;
    }
    @JsonProperty("thresholdPercentage")
    public Double thresholdPercentage;
    public AwsJobAbortCriteria withThresholdPercentage(Double thresholdPercentage) {
        this.thresholdPercentage = thresholdPercentage;
        return this;
    }
}