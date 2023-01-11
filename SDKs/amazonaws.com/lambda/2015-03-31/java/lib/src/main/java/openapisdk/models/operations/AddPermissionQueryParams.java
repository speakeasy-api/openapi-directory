package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddPermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public AddPermissionQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}