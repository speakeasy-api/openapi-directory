package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticsearchDomainVpcOptions
 * Information that Elasticsearch derives based on <code>VPCOptions</code> for the domain.
**/
public class AwsElasticsearchDomainVpcOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZones")
    public String[] availabilityZones;
    public AwsElasticsearchDomainVpcOptions withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public AwsElasticsearchDomainVpcOptions withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public AwsElasticsearchDomainVpcOptions withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VPCId")
    public String vpcId;
    public AwsElasticsearchDomainVpcOptions withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}