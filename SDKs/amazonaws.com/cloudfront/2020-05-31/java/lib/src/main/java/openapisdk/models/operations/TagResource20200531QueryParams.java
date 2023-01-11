package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResource20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public TagResource20200531OperationEnum operation;
    public TagResource20200531QueryParams withOperation(TagResource20200531OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public TagResource20200531QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}