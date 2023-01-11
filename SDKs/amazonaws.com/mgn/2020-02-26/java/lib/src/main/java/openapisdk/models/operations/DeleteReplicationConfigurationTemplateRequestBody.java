package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteReplicationConfigurationTemplateRequestBody {
    @JsonProperty("replicationConfigurationTemplateID")
    public String replicationConfigurationTemplateID;
    public DeleteReplicationConfigurationTemplateRequestBody withReplicationConfigurationTemplateId(String replicationConfigurationTemplateID) {
        this.replicationConfigurationTemplateID = replicationConfigurationTemplateID;
        return this;
    }
}