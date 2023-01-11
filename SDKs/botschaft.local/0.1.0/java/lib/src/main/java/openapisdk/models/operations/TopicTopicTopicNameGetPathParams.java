package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopicTopicTopicNameGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=topic_name")
    public String topicName;
    public TopicTopicTopicNameGetPathParams withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}