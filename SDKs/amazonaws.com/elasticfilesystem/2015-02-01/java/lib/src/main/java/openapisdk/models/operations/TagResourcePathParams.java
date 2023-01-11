package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceId")
    public String resourceId;
    public TagResourcePathParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}