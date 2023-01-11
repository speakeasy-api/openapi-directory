package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FunctionsGetExecutionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public FunctionsGetExecutionPathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=functionId")
    public String functionId;
    public FunctionsGetExecutionPathParams withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
}