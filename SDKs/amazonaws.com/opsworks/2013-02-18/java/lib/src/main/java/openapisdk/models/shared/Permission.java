package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Permission
 * Describes stack or user permissions.
**/
public class Permission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSsh")
    public Boolean allowSsh;
    public Permission withAllowSsh(Boolean allowSsh) {
        this.allowSsh = allowSsh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSudo")
    public Boolean allowSudo;
    public Permission withAllowSudo(Boolean allowSudo) {
        this.allowSudo = allowSudo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamUserArn")
    public String iamUserArn;
    public Permission withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Level")
    public String level;
    public Permission withLevel(String level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public Permission withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}