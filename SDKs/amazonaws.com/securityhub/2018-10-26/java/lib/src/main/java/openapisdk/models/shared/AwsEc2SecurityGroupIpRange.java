package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2SecurityGroupIpRange
 * A range of IPv4 addresses.
**/
public class AwsEc2SecurityGroupIpRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CidrIp")
    public String cidrIp;
    public AwsEc2SecurityGroupIpRange withCidrIp(String cidrIp) {
        this.cidrIp = cidrIp;
        return this;
    }
}