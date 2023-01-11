package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceDefinitionId")
    public String resourceDefinitionId;
    public GetResourceDefinitionPathParams withResourceDefinitionId(String resourceDefinitionId) {
        this.resourceDefinitionId = resourceDefinitionId;
        return this;
    }
}