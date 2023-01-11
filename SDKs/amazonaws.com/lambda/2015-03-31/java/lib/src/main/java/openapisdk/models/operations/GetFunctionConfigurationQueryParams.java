package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Qualifier")
    public String qualifier;
    public GetFunctionConfigurationQueryParams withQualifier(String qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}