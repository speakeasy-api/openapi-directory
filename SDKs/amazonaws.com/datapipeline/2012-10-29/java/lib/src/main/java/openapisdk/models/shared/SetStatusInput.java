package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SetStatusInput
 * Contains the parameters for SetStatus.
**/
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
}