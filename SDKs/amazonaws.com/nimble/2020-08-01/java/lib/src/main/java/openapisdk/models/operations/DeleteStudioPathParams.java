package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStudioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public DeleteStudioPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}