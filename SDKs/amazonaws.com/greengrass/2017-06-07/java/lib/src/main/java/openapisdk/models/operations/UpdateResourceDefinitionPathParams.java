package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResourceDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceDefinitionId")
    public String resourceDefinitionId;
    public UpdateResourceDefinitionPathParams withResourceDefinitionId(String resourceDefinitionId) {
        this.resourceDefinitionId = resourceDefinitionId;
        return this;
    }
}