package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeElasticLoadBalancersResult
 * Contains the response to a <code>DescribeElasticLoadBalancers</code> request.
**/
public class DescribeElasticLoadBalancersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticLoadBalancers")
    public ElasticLoadBalancer[] elasticLoadBalancers;
    public DescribeElasticLoadBalancersResult withElasticLoadBalancers(ElasticLoadBalancer[] elasticLoadBalancers) {
        this.elasticLoadBalancers = elasticLoadBalancers;
        return this;
    }
}