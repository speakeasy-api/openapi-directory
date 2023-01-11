package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbInstanceAssociatedRole
 * An IAM role associated with the DB instance.
**/
public class AwsRdsDbInstanceAssociatedRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeatureName")
    public String featureName;
    public AwsRdsDbInstanceAssociatedRole withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public AwsRdsDbInstanceAssociatedRole withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsRdsDbInstanceAssociatedRole withStatus(String status) {
        this.status = status;
        return this;
    }
}