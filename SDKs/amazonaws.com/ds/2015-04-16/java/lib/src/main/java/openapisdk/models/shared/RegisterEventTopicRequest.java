package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RegisterEventTopicRequest
 * Registers a new event topic.
**/
public class RegisterEventTopicRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public RegisterEventTopicRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("TopicName")
    public String topicName;
    public RegisterEventTopicRequest withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}