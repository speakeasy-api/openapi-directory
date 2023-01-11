package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopicTopicTopicNameGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public TopicTopicTopicNameGetHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}