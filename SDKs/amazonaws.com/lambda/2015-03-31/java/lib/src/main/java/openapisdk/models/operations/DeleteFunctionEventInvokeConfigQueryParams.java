package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFunctionEventInvokeConfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public DeleteFunctionEventInvokeConfigQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}