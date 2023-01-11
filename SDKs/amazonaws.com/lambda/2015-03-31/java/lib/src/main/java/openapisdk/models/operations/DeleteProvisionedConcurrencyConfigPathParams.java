package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProvisionedConcurrencyConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public DeleteProvisionedConcurrencyConfigPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}