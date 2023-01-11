package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public GetFunctionQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}