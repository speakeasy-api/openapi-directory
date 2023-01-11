package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactMetaDataByGlobalIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=globalId")
    public Long globalId;
    public GetArtifactMetaDataByGlobalIdPathParams withGlobalId(Long globalId) {
        this.globalId = globalId;
        return this;
    }
}