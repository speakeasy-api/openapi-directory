package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeElasticIpsResult
 * Contains the response to a <code>DescribeElasticIps</code> request.
**/
public class DescribeElasticIpsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticIps")
    public ElasticIp[] elasticIps;
    public DescribeElasticIpsResult withElasticIps(ElasticIp[] elasticIps) {
        this.elasticIps = elasticIps;
        return this;
    }
}