/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeBatchInferenceJobResponse - Success
 */
public class DescribeBatchInferenceJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchInferenceJob")
    public BatchInferenceJob batchInferenceJob;

    public DescribeBatchInferenceJobResponse withBatchInferenceJob(BatchInferenceJob batchInferenceJob) {
        this.batchInferenceJob = batchInferenceJob;
        return this;
    }
    
    public DescribeBatchInferenceJobResponse(){}
}
