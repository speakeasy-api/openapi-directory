package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetPermissionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSsh")
    public Boolean allowSsh;
    public SetPermissionRequest withAllowSsh(Boolean allowSsh) {
        this.allowSsh = allowSsh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowSudo")
    public Boolean allowSudo;
    public SetPermissionRequest withAllowSudo(Boolean allowSudo) {
        this.allowSudo = allowSudo;
        return this;
    }
    @JsonProperty("IamUserArn")
    public String iamUserArn;
    public SetPermissionRequest withIamUserArn(String iamUserArn) {
        this.iamUserArn = iamUserArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Level")
    public String level;
    public SetPermissionRequest withLevel(String level) {
        this.level = level;
        return this;
    }
    @JsonProperty("StackId")
    public String stackId;
    public SetPermissionRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}