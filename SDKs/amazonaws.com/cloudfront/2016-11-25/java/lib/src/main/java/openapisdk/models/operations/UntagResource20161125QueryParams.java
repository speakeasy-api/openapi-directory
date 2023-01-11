package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResource20161125QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public UntagResource20161125OperationEnum operation;
    public UntagResource20161125QueryParams withOperation(UntagResource20161125OperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public UntagResource20161125QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}