package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCodeSigningConfigResponse {
    @JsonProperty("CodeSigningConfig")
    public CodeSigningConfig codeSigningConfig;
    public CreateCodeSigningConfigResponse withCodeSigningConfig(CodeSigningConfig codeSigningConfig) {
        this.codeSigningConfig = codeSigningConfig;
        return this;
    }
}