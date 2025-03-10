/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetBuildBatchesOutput - Success
 */
public class BatchGetBuildBatchesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBatches")
    public BuildBatch[] buildBatches;

    public BatchGetBuildBatchesOutput withBuildBatches(BuildBatch[] buildBatches) {
        this.buildBatches = buildBatches;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBatchesNotFound")
    public String[] buildBatchesNotFound;

    public BatchGetBuildBatchesOutput withBuildBatchesNotFound(String[] buildBatchesNotFound) {
        this.buildBatchesNotFound = buildBatchesNotFound;
        return this;
    }
    
    public BatchGetBuildBatchesOutput(){}
}
