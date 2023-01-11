package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteElasticIp")
    public Boolean deleteElasticIp;
    public DeleteInstanceRequest withDeleteElasticIp(Boolean deleteElasticIp) {
        this.deleteElasticIp = deleteElasticIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteVolumes")
    public Boolean deleteVolumes;
    public DeleteInstanceRequest withDeleteVolumes(Boolean deleteVolumes) {
        this.deleteVolumes = deleteVolumes;
        return this;
    }
    @JsonProperty("InstanceId")
    public String instanceId;
    public DeleteInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}