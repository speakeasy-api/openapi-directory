package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAliasRequest {
    @JsonProperty("AliasName")
    public String aliasName;
    public CreateAliasRequest withAliasName(String aliasName) {
        this.aliasName = aliasName;
        return this;
    }
    @JsonProperty("TargetKeyId")
    public String targetKeyId;
    public CreateAliasRequest withTargetKeyId(String targetKeyId) {
        this.targetKeyId = targetKeyId;
        return this;
    }
}