package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public UntagResource20200531OperationEnum operation;
    public UntagResource20200531QueryParams withOperation(UntagResource20200531OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public UntagResource20200531QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}