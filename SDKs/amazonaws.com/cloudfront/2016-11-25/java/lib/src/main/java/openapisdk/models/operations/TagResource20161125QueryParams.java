package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResource20161125QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public TagResource20161125OperationEnum operation;
    public TagResource20161125QueryParams withOperation(TagResource20161125OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public TagResource20161125QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}