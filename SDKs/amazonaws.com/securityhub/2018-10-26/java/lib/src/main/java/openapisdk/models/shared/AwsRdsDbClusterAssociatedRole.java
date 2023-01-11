package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbClusterAssociatedRole
 * An IAM role that is associated with the Amazon RDS DB cluster.
**/
public class AwsRdsDbClusterAssociatedRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public AwsRdsDbClusterAssociatedRole withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsRdsDbClusterAssociatedRole withStatus(String status) {
        this.status = status;
        return this;
    }
}