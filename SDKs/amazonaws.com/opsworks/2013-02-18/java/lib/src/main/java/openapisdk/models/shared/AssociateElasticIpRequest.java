package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateElasticIpRequest {
    @JsonProperty("ElasticIp")
    public String elasticIp;
    public AssociateElasticIpRequest withElasticIp(String elasticIp) {
        this.elasticIp = elasticIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public AssociateElasticIpRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}