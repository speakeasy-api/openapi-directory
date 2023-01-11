package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=streamId")
    public String streamId;
    public UpdateStreamPathParams withStreamId(String streamId) {
        this.streamId = streamId;
        return this;
    }
}