/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SetStatusInput - Contains the parameters for SetStatus.
 */
public class SetStatusInput {
    @JsonProperty("objectIds")
    public String[] objectIds;

    public SetStatusInput withObjectIds(String[] objectIds) {
        this.objectIds = objectIds;
        return this;
    }
    
    @JsonProperty("pipelineId")
    public String pipelineId;

    public SetStatusInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
    
    @JsonProperty("status")
    public String status;

    public SetStatusInput withStatus(String status) {
        this.status = status;
        return this;
    }
    
    public SetStatusInput(@JsonProperty("objectIds") String[] objectIds, @JsonProperty("pipelineId") String pipelineId, @JsonProperty("status") String status) {
        this.objectIds = objectIds;
        this.pipelineId = pipelineId;
        this.status = status;
  }
}
