package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20190326QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public UntagResource20190326OperationEnum operation;
    public UntagResource20190326QueryParams withOperation(UntagResource20190326OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public UntagResource20190326QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}