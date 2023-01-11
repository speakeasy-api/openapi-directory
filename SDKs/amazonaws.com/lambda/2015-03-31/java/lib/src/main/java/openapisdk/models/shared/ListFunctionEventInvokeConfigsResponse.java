package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFunctionEventInvokeConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionEventInvokeConfigs")
    public FunctionEventInvokeConfig[] functionEventInvokeConfigs;
    public ListFunctionEventInvokeConfigsResponse withFunctionEventInvokeConfigs(FunctionEventInvokeConfig[] functionEventInvokeConfigs) {
        this.functionEventInvokeConfigs = functionEventInvokeConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListFunctionEventInvokeConfigsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}