package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeregisterEventTopicRequest
 * Removes the specified directory as a publisher to the specified Amazon SNS topic.
**/
public class DeregisterEventTopicRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DeregisterEventTopicRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("TopicName")
    public String topicName;
    public DeregisterEventTopicRequest withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}