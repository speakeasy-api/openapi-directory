package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public PublishVersionPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}