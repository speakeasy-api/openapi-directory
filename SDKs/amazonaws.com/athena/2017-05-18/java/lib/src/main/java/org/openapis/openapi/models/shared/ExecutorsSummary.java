/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExecutorsSummary - Contains summary information about an executor.
 */
public class ExecutorsSummary {
    @JsonProperty("ExecutorId")
    public String executorId;

    public ExecutorsSummary withExecutorId(String executorId) {
        this.executorId = executorId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutorSize")
    public Long executorSize;

    public ExecutorsSummary withExecutorSize(Long executorSize) {
        this.executorSize = executorSize;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutorState")
    public ExecutorStateEnum executorState;

    public ExecutorsSummary withExecutorState(ExecutorStateEnum executorState) {
        this.executorState = executorState;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutorType")
    public ExecutorTypeEnum executorType;

    public ExecutorsSummary withExecutorType(ExecutorTypeEnum executorType) {
        this.executorType = executorType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDateTime")
    public Long startDateTime;

    public ExecutorsSummary withStartDateTime(Long startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminationDateTime")
    public Long terminationDateTime;

    public ExecutorsSummary withTerminationDateTime(Long terminationDateTime) {
        this.terminationDateTime = terminationDateTime;
        return this;
    }
    
    public ExecutorsSummary(@JsonProperty("ExecutorId") String executorId) {
        this.executorId = executorId;
  }
}
