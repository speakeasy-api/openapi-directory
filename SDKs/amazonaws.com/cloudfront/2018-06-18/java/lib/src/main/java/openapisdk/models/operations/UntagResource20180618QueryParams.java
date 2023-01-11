package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20180618QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public UntagResource20180618OperationEnum operation;
    public UntagResource20180618QueryParams withOperation(UntagResource20180618OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public UntagResource20180618QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}