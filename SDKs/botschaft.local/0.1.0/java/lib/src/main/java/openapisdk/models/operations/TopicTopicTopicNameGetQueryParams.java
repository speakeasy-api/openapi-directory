package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopicTopicTopicNameGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=base64_message")
    public String base64Message;
    public TopicTopicTopicNameGetQueryParams withBase64Message(String base64Message) {
        this.base64Message = base64Message;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=message")
    public String message;
    public TopicTopicTopicNameGetQueryParams withMessage(String message) {
        this.message = message;
        return this;
    }
}