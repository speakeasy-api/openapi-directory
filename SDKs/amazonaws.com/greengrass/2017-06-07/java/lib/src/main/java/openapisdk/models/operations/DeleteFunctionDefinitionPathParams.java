package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFunctionDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionDefinitionId")
    public String functionDefinitionId;
    public DeleteFunctionDefinitionPathParams withFunctionDefinitionId(String functionDefinitionId) {
        this.functionDefinitionId = functionDefinitionId;
        return this;
    }
}