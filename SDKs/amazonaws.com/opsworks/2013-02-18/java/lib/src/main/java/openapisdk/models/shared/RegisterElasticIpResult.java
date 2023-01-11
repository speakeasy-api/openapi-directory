package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterElasticIpResult
 * Contains the response to a <code>RegisterElasticIp</code> request.
**/
public class RegisterElasticIpResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticIp")
    public String elasticIp;
    public RegisterElasticIpResult withElasticIp(String elasticIp) {
        this.elasticIp = elasticIp;
        return this;
    }
}