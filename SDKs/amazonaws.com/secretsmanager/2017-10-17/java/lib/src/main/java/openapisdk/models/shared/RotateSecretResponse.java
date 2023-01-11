package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RotateSecretResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ARN")
    public String arn;
    public RotateSecretResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RotateSecretResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionId")
    public String versionId;
    public RotateSecretResponse withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}