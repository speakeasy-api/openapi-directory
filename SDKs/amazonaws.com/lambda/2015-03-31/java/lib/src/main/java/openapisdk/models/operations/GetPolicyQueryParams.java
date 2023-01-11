package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public GetPolicyQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}