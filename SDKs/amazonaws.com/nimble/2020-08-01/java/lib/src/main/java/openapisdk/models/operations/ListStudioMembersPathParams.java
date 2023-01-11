package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStudioMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public ListStudioMembersPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}