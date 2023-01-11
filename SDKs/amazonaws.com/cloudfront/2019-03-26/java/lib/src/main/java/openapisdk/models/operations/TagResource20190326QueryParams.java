package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResource20190326QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public TagResource20190326OperationEnum operation;
    public TagResource20190326QueryParams withOperation(TagResource20190326OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public TagResource20190326QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}