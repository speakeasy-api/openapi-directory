package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterElasticIpRequest {
    @JsonProperty("ElasticIp")
    public String elasticIp;
    public RegisterElasticIpRequest withElasticIp(String elasticIp) {
        this.elasticIp = elasticIp;
        return this;
    }
    @JsonProperty("StackId")
    public String stackId;
    public RegisterElasticIpRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}