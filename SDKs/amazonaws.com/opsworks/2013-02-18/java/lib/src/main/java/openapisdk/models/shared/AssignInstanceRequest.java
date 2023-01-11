package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssignInstanceRequest {
    @JsonProperty("InstanceId")
    public String instanceId;
    public AssignInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonProperty("LayerIds")
    public String[] layerIds;
    public AssignInstanceRequest withLayerIds(String[] layerIds) {
        this.layerIds = layerIds;
        return this;
    }
}