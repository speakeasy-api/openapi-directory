package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateElasticIpRequest {
    @JsonProperty("ElasticIp")
    public String elasticIp;
    public DisassociateElasticIpRequest withElasticIp(String elasticIp) {
        this.elasticIp = elasticIp;
        return this;
    }
}