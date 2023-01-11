package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFunctionsByCodeSigningConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionArns")
    public String[] functionArns;
    public ListFunctionsByCodeSigningConfigResponse withFunctionArns(String[] functionArns) {
        this.functionArns = functionArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListFunctionsByCodeSigningConfigResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}