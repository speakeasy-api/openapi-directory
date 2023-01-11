package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFunctionCodeSigningConfigRequestBody {
    @JsonProperty("CodeSigningConfigArn")
    public String codeSigningConfigArn;
    public PutFunctionCodeSigningConfigRequestBody withCodeSigningConfigArn(String codeSigningConfigArn) {
        this.codeSigningConfigArn = codeSigningConfigArn;
        return this;
    }
}