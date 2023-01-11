package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunctionDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionDefinitionId")
    public String functionDefinitionId;
    public UpdateFunctionDefinitionPathParams withFunctionDefinitionId(String functionDefinitionId) {
        this.functionDefinitionId = functionDefinitionId;
        return this;
    }
}