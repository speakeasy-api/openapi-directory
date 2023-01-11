package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentVariableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=variable_uuid")
    public String variableUuid;
    public CreateDeploymentVariableQueryParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
}