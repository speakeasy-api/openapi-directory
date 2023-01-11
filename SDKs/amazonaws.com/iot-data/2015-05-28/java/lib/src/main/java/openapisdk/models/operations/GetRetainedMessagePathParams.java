package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRetainedMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=topic")
    public String topic;
    public GetRetainedMessagePathParams withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}