package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFunctionConcurrencyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public PutFunctionConcurrencyPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}