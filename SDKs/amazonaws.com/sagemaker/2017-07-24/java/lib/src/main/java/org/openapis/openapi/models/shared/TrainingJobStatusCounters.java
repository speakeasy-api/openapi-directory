/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrainingJobStatusCounters - The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
 */
public class TrainingJobStatusCounters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Completed")
    public Long completed;

    public TrainingJobStatusCounters withCompleted(Long completed) {
        this.completed = completed;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InProgress")
    public Long inProgress;

    public TrainingJobStatusCounters withInProgress(Long inProgress) {
        this.inProgress = inProgress;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonRetryableError")
    public Long nonRetryableError;

    public TrainingJobStatusCounters withNonRetryableError(Long nonRetryableError) {
        this.nonRetryableError = nonRetryableError;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryableError")
    public Long retryableError;

    public TrainingJobStatusCounters withRetryableError(Long retryableError) {
        this.retryableError = retryableError;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Stopped")
    public Long stopped;

    public TrainingJobStatusCounters withStopped(Long stopped) {
        this.stopped = stopped;
        return this;
    }
    
    public TrainingJobStatusCounters(){}
}
