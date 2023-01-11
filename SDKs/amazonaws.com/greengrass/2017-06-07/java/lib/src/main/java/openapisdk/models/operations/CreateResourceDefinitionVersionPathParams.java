package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourceDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceDefinitionId")
    public String resourceDefinitionId;
    public CreateResourceDefinitionVersionPathParams withResourceDefinitionId(String resourceDefinitionId) {
        this.resourceDefinitionId = resourceDefinitionId;
        return this;
    }
}