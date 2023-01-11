package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FunctionList
 * Functions List
**/
public class FunctionList {
    @JsonProperty("functions")
    public Function[] functions;
    public FunctionList withFunctions(Function[] functions) {
        this.functions = functions;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public FunctionList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}