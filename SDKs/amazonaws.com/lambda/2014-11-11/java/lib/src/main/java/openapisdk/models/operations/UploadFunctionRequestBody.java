package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UploadFunctionRequestBody {
    @JsonProperty("FunctionZip")
    public String functionZip;
    public UploadFunctionRequestBody withFunctionZip(String functionZip) {
        this.functionZip = functionZip;
        return this;
    }
}