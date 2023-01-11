package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutStudioMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public PutStudioMembersPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}