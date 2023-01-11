package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactByGlobalIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=globalId")
    public Long globalId;
    public GetArtifactByGlobalIdPathParams withGlobalId(Long globalId) {
        this.globalId = globalId;
        return this;
    }
}