package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionDefinitionId")
    public String functionDefinitionId;
    public GetFunctionDefinitionPathParams withFunctionDefinitionId(String functionDefinitionId) {
        this.functionDefinitionId = functionDefinitionId;
        return this;
    }
}