package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProvisionedConcurrencyConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public GetProvisionedConcurrencyConfigPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}