package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=streamId")
    public String streamId;
    public CreateStreamPathParams withStreamId(String streamId) {
        this.streamId = streamId;
        return this;
    }
}