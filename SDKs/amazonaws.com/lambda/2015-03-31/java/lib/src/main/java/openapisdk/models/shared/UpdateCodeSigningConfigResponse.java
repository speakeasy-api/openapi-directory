package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCodeSigningConfigResponse {
    @JsonProperty("CodeSigningConfig")
    public CodeSigningConfig codeSigningConfig;
    public UpdateCodeSigningConfigResponse withCodeSigningConfig(CodeSigningConfig codeSigningConfig) {
        this.codeSigningConfig = codeSigningConfig;
        return this;
    }
}