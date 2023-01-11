package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutProvisionedConcurrencyConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public PutProvisionedConcurrencyConfigPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}