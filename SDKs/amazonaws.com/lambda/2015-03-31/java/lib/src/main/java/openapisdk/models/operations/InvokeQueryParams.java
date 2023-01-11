package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public InvokeQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}