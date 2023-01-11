package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAliasRequest {
    @JsonProperty("AliasName")
    public String aliasName;
    public UpdateAliasRequest withAliasName(String aliasName) {
        this.aliasName = aliasName;
        return this;
    }
    @JsonProperty("TargetKeyId")
    public String targetKeyId;
    public UpdateAliasRequest withTargetKeyId(String targetKeyId) {
        this.targetKeyId = targetKeyId;
        return this;
    }
}