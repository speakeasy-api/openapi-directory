package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionDefinitionId")
    public String functionDefinitionId;
    public GetFunctionDefinitionVersionPathParams withFunctionDefinitionId(String functionDefinitionId) {
        this.functionDefinitionId = functionDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionDefinitionVersionId")
    public String functionDefinitionVersionId;
    public GetFunctionDefinitionVersionPathParams withFunctionDefinitionVersionId(String functionDefinitionVersionId) {
        this.functionDefinitionVersionId = functionDefinitionVersionId;
        return this;
    }
}