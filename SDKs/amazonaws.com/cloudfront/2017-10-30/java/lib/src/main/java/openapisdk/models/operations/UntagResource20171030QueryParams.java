package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20171030QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public UntagResource20171030OperationEnum operation;
    public UntagResource20171030QueryParams withOperation(UntagResource20171030OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public UntagResource20171030QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}