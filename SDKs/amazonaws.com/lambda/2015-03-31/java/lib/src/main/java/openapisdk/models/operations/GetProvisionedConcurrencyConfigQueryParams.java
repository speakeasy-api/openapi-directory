package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProvisionedConcurrencyConfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public GetProvisionedConcurrencyConfigQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}