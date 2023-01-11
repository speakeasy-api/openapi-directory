package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResource20171030QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public TagResource20171030OperationEnum operation;
    public TagResource20171030QueryParams withOperation(TagResource20171030OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public TagResource20171030QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}