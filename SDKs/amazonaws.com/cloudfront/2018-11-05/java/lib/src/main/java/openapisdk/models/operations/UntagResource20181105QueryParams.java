package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20181105QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public UntagResource20181105OperationEnum operation;
    public UntagResource20181105QueryParams withOperation(UntagResource20181105OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public UntagResource20181105QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}