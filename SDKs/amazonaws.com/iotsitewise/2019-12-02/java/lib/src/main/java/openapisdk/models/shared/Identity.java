package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Identity
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
**/
public class Identity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public GroupIdentity group;
    public Identity withGroup(GroupIdentity group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamRole")
    public IamRoleIdentity iamRole;
    public Identity withIamRole(IamRoleIdentity iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamUser")
    public IamUserIdentity iamUser;
    public Identity withIamUser(IamUserIdentity iamUser) {
        this.iamUser = iamUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserIdentity user;
    public Identity withUser(UserIdentity user) {
        this.user = user;
        return this;
    }
}