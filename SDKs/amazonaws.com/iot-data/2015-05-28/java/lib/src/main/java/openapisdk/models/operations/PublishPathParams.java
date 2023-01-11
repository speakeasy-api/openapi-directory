package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=topic")
    public String topic;
    public PublishPathParams withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}