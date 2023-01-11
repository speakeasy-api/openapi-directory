package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResource20181105QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public TagResource20181105OperationEnum operation;
    public TagResource20181105QueryParams withOperation(TagResource20181105OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public TagResource20181105QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}