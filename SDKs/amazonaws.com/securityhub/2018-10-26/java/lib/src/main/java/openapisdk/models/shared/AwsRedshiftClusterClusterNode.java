package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterClusterNode
 * A node in an Amazon Redshift cluster.
**/
public class AwsRedshiftClusterClusterNode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeRole")
    public String nodeRole;
    public AwsRedshiftClusterClusterNode withNodeRole(String nodeRole) {
        this.nodeRole = nodeRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivateIpAddress")
    public String privateIpAddress;
    public AwsRedshiftClusterClusterNode withPrivateIpAddress(String privateIpAddress) {
        this.privateIpAddress = privateIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicIpAddress")
    public String publicIpAddress;
    public AwsRedshiftClusterClusterNode withPublicIpAddress(String publicIpAddress) {
        this.publicIpAddress = publicIpAddress;
        return this;
    }
}