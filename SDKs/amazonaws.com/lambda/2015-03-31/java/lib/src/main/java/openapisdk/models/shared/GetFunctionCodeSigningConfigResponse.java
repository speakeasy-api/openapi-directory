package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFunctionCodeSigningConfigResponse {
    @JsonProperty("CodeSigningConfigArn")
    public String codeSigningConfigArn;
    public GetFunctionCodeSigningConfigResponse withCodeSigningConfigArn(String codeSigningConfigArn) {
        this.codeSigningConfigArn = codeSigningConfigArn;
        return this;
    }
    @JsonProperty("FunctionName")
    public String functionName;
    public GetFunctionCodeSigningConfigResponse withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}