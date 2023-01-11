package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFunctionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public DeleteFunctionQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}