package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=streamId")
    public String streamId;
    public DeleteStreamPathParams withStreamId(String streamId) {
        this.streamId = streamId;
        return this;
    }
}