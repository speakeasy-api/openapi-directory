package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20170325QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public UntagResource20170325OperationEnum operation;
    public UntagResource20170325QueryParams withOperation(UntagResource20170325OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public UntagResource20170325QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}