package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentByGlobalIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=globalId")
    public Long globalId;
    public GetContentByGlobalIdPathParams withGlobalId(Long globalId) {
        this.globalId = globalId;
        return this;
    }
}