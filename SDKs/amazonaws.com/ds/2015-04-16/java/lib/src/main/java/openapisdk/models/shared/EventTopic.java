package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * EventTopic
 * Information about Amazon SNS topic and Directory Service directory associations.
**/
public class EventTopic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDateTime")
    public OffsetDateTime createdDateTime;
    public EventTopic withCreatedDateTime(OffsetDateTime createdDateTime) {
        this.createdDateTime = createdDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public EventTopic withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TopicStatusEnum status;
    public EventTopic withStatus(TopicStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicArn")
    public String topicArn;
    public EventTopic withTopicArn(String topicArn) {
        this.topicArn = topicArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicName")
    public String topicName;
    public EventTopic withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}