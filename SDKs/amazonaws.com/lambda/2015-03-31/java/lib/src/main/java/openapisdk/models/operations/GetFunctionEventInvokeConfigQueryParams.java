package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionEventInvokeConfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public GetFunctionEventInvokeConfigQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}