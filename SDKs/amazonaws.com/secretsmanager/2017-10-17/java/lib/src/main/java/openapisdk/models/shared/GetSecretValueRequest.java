package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSecretValueRequest {
    @JsonProperty("SecretId")
    public String secretId;
    public GetSecretValueRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionId")
    public String versionId;
    public GetSecretValueRequest withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionStage")
    public String versionStage;
    public GetSecretValueRequest withVersionStage(String versionStage) {
        this.versionStage = versionStage;
        return this;
    }
}