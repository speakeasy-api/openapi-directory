package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountAssignment
 * <p>The assignment that indicates a principal's limited access to a specified Amazon Web Services account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note>
**/
public class AccountAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public AccountAssignment withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionSetArn")
    public String permissionSetArn;
    public AccountAssignment withPermissionSetArn(String permissionSetArn) {
        this.permissionSetArn = permissionSetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalId")
    public String principalId;
    public AccountAssignment withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalType")
    public PrincipalTypeEnum principalType;
    public AccountAssignment withPrincipalType(PrincipalTypeEnum principalType) {
        this.principalType = principalType;
        return this;
    }
}