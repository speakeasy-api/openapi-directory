package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserIdentity
 * Provides information about the type and other characteristics of an entity that performed an action on an affected resource.
**/
public class UserIdentity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assumedRole")
    public AssumedRole assumedRole;
    public UserIdentity withAssumedRole(AssumedRole assumedRole) {
        this.assumedRole = assumedRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsAccount")
    public AwsAccount awsAccount;
    public UserIdentity withAwsAccount(AwsAccount awsAccount) {
        this.awsAccount = awsAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsService")
    public AwsService awsService;
    public UserIdentity withAwsService(AwsService awsService) {
        this.awsService = awsService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federatedUser")
    public FederatedUser federatedUser;
    public UserIdentity withFederatedUser(FederatedUser federatedUser) {
        this.federatedUser = federatedUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamUser")
    public IamUser iamUser;
    public UserIdentity withIamUser(IamUser iamUser) {
        this.iamUser = iamUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root")
    public UserIdentityRoot root;
    public UserIdentity withRoot(UserIdentityRoot root) {
        this.root = root;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserIdentityTypeEnum type;
    public UserIdentity withType(UserIdentityTypeEnum type) {
        this.type = type;
        return this;
    }
}