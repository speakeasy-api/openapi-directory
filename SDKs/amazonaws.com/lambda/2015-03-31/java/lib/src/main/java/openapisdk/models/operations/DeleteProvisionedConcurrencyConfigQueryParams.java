package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProvisionedConcurrencyConfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public DeleteProvisionedConcurrencyConfigQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}