package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateAccountPasswordPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateAccountPasswordPolicyActionEnum action;
    public GetUpdateAccountPasswordPolicyQueryParams withAction(GetUpdateAccountPasswordPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AllowUsersToChangePassword")
    public Boolean allowUsersToChangePassword;
    public GetUpdateAccountPasswordPolicyQueryParams withAllowUsersToChangePassword(Boolean allowUsersToChangePassword) {
        this.allowUsersToChangePassword = allowUsersToChangePassword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HardExpiry")
    public Boolean hardExpiry;
    public GetUpdateAccountPasswordPolicyQueryParams withHardExpiry(Boolean hardExpiry) {
        this.hardExpiry = hardExpiry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxPasswordAge")
    public Long maxPasswordAge;
    public GetUpdateAccountPasswordPolicyQueryParams withMaxPasswordAge(Long maxPasswordAge) {
        this.maxPasswordAge = maxPasswordAge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MinimumPasswordLength")
    public Long minimumPasswordLength;
    public GetUpdateAccountPasswordPolicyQueryParams withMinimumPasswordLength(Long minimumPasswordLength) {
        this.minimumPasswordLength = minimumPasswordLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PasswordReusePrevention")
    public Long passwordReusePrevention;
    public GetUpdateAccountPasswordPolicyQueryParams withPasswordReusePrevention(Long passwordReusePrevention) {
        this.passwordReusePrevention = passwordReusePrevention;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RequireLowercaseCharacters")
    public Boolean requireLowercaseCharacters;
    public GetUpdateAccountPasswordPolicyQueryParams withRequireLowercaseCharacters(Boolean requireLowercaseCharacters) {
        this.requireLowercaseCharacters = requireLowercaseCharacters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RequireNumbers")
    public Boolean requireNumbers;
    public GetUpdateAccountPasswordPolicyQueryParams withRequireNumbers(Boolean requireNumbers) {
        this.requireNumbers = requireNumbers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RequireSymbols")
    public Boolean requireSymbols;
    public GetUpdateAccountPasswordPolicyQueryParams withRequireSymbols(Boolean requireSymbols) {
        this.requireSymbols = requireSymbols;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RequireUppercaseCharacters")
    public Boolean requireUppercaseCharacters;
    public GetUpdateAccountPasswordPolicyQueryParams withRequireUppercaseCharacters(Boolean requireUppercaseCharacters) {
        this.requireUppercaseCharacters = requireUppercaseCharacters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateAccountPasswordPolicyVersionEnum version;
    public GetUpdateAccountPasswordPolicyQueryParams withVersion(GetUpdateAccountPasswordPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}