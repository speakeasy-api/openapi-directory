/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteJobQueueRequestBody {
    /**
     * The short name or full Amazon Resource Name (ARN) of the queue to delete.
     */
    @JsonProperty("jobQueue")
    public String jobQueue;

    public DeleteJobQueueRequestBody withJobQueue(String jobQueue) {
        this.jobQueue = jobQueue;
        return this;
    }
    
    public DeleteJobQueueRequestBody(@JsonProperty("jobQueue") String jobQueue) {
        this.jobQueue = jobQueue;
  }
}
