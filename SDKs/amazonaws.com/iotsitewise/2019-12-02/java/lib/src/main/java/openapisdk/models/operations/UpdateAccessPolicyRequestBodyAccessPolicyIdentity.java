package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAccessPolicyRequestBodyAccessPolicyIdentity
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
**/
public class UpdateAccessPolicyRequestBodyAccessPolicyIdentity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public openapisdk.models.shared.GroupIdentity group;
    public UpdateAccessPolicyRequestBodyAccessPolicyIdentity withGroup(openapisdk.models.shared.GroupIdentity group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamRole")
    public openapisdk.models.shared.IamRoleIdentity iamRole;
    public UpdateAccessPolicyRequestBodyAccessPolicyIdentity withIamRole(openapisdk.models.shared.IamRoleIdentity iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamUser")
    public openapisdk.models.shared.IamUserIdentity iamUser;
    public UpdateAccessPolicyRequestBodyAccessPolicyIdentity withIamUser(openapisdk.models.shared.IamUserIdentity iamUser) {
        this.iamUser = iamUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public openapisdk.models.shared.UserIdentity user;
    public UpdateAccessPolicyRequestBodyAccessPolicyIdentity withUser(openapisdk.models.shared.UserIdentity user) {
        this.user = user;
        return this;
    }
}