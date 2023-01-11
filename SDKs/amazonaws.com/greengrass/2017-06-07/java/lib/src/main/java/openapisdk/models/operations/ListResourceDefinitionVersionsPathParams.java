package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceDefinitionVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceDefinitionId")
    public String resourceDefinitionId;
    public ListResourceDefinitionVersionsPathParams withResourceDefinitionId(String resourceDefinitionId) {
        this.resourceDefinitionId = resourceDefinitionId;
        return this;
    }
}