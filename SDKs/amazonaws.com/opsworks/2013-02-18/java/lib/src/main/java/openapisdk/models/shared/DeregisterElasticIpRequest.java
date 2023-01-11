package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterElasticIpRequest {
    @JsonProperty("ElasticIp")
    public String elasticIp;
    public DeregisterElasticIpRequest withElasticIp(String elasticIp) {
        this.elasticIp = elasticIp;
        return this;
    }
}