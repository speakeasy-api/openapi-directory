package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IamRoleIdentity
 * Contains information about an Identity and Access Management role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>IAM User Guide</i>.
**/
public class IamRoleIdentity {
    @JsonProperty("arn")
    public String arn;
    public IamRoleIdentity withArn(String arn) {
        this.arn = arn;
        return this;
    }
}