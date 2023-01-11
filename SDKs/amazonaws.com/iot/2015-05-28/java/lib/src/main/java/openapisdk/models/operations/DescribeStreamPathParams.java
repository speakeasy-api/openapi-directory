package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=streamId")
    public String streamId;
    public DescribeStreamPathParams withStreamId(String streamId) {
        this.streamId = streamId;
        return this;
    }
}