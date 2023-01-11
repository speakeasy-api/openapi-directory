package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutProvisionedConcurrencyConfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public PutProvisionedConcurrencyConfigQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}