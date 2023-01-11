package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbv2LoadBalancerDetails
 * Information about a load balancer.
**/
public class AwsElbv2LoadBalancerDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZones")
    public AvailabilityZone[] availabilityZones;
    public AwsElbv2LoadBalancerDetails withAvailabilityZones(AvailabilityZone[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CanonicalHostedZoneId")
    public String canonicalHostedZoneId;
    public AwsElbv2LoadBalancerDetails withCanonicalHostedZoneId(String canonicalHostedZoneId) {
        this.canonicalHostedZoneId = canonicalHostedZoneId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedTime")
    public String createdTime;
    public AwsElbv2LoadBalancerDetails withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DNSName")
    public String dnsName;
    public AwsElbv2LoadBalancerDetails withDnsName(String dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddressType")
    public String ipAddressType;
    public AwsElbv2LoadBalancerDetails withIpAddressType(String ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Scheme")
    public String scheme;
    public AwsElbv2LoadBalancerDetails withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroups")
    public String[] securityGroups;
    public AwsElbv2LoadBalancerDetails withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public LoadBalancerState state;
    public AwsElbv2LoadBalancerDetails withState(LoadBalancerState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsElbv2LoadBalancerDetails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public AwsElbv2LoadBalancerDetails withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}