package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamingSessionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public ListStreamingSessionsPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}