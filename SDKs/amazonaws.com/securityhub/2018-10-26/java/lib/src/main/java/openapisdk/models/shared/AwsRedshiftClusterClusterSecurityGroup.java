package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterClusterSecurityGroup
 * A security group that is associated with the cluster.
**/
public class AwsRedshiftClusterClusterSecurityGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterSecurityGroupName")
    public String clusterSecurityGroupName;
    public AwsRedshiftClusterClusterSecurityGroup withClusterSecurityGroupName(String clusterSecurityGroupName) {
        this.clusterSecurityGroupName = clusterSecurityGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsRedshiftClusterClusterSecurityGroup withStatus(String status) {
        this.status = status;
        return this;
    }
}