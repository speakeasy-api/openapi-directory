package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFunctionCodeSigningConfigResponse {
    @JsonProperty("CodeSigningConfigArn")
    public String codeSigningConfigArn;
    public PutFunctionCodeSigningConfigResponse withCodeSigningConfigArn(String codeSigningConfigArn) {
        this.codeSigningConfigArn = codeSigningConfigArn;
        return this;
    }
    @JsonProperty("FunctionName")
    public String functionName;
    public PutFunctionCodeSigningConfigResponse withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}