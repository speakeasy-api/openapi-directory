package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStudioComponentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public ListStudioComponentsPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}