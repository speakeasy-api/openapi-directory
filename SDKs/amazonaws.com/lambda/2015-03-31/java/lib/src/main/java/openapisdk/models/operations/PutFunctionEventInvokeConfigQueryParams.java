package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFunctionEventInvokeConfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public PutFunctionEventInvokeConfigQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}