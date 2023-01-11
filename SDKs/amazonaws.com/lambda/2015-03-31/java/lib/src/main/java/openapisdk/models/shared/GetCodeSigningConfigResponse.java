package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCodeSigningConfigResponse {
    @JsonProperty("CodeSigningConfig")
    public CodeSigningConfig codeSigningConfig;
    public GetCodeSigningConfigResponse withCodeSigningConfig(CodeSigningConfig codeSigningConfig) {
        this.codeSigningConfig = codeSigningConfig;
        return this;
    }
}