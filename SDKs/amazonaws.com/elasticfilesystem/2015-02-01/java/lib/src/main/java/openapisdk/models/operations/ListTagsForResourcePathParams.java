package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceId")
    public String resourceId;
    public ListTagsForResourcePathParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}