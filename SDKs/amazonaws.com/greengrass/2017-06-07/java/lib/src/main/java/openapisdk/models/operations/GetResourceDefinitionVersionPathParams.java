package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceDefinitionId")
    public String resourceDefinitionId;
    public GetResourceDefinitionVersionPathParams withResourceDefinitionId(String resourceDefinitionId) {
        this.resourceDefinitionId = resourceDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceDefinitionVersionId")
    public String resourceDefinitionVersionId;
    public GetResourceDefinitionVersionPathParams withResourceDefinitionVersionId(String resourceDefinitionVersionId) {
        this.resourceDefinitionVersionId = resourceDefinitionVersionId;
        return this;
    }
}