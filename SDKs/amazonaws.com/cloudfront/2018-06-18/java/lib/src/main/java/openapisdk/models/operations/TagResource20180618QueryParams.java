package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResource20180618QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public TagResource20180618OperationEnum operation;
    public TagResource20180618QueryParams withOperation(TagResource20180618OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public TagResource20180618QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}