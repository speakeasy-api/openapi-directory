package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterIamRole
 * An IAM role that the cluster can use to access other Amazon Web Services services.
**/
public class AwsRedshiftClusterIamRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplyStatus")
    public String applyStatus;
    public AwsRedshiftClusterIamRole withApplyStatus(String applyStatus) {
        this.applyStatus = applyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamRoleArn")
    public String iamRoleArn;
    public AwsRedshiftClusterIamRole withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
}