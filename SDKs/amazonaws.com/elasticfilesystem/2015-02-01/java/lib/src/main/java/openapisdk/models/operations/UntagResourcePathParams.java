package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceId")
    public String resourceId;
    public UntagResourcePathParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}