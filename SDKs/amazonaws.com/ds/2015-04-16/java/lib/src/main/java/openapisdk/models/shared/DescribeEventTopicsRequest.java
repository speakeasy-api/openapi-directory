package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEventTopicsRequest
 * Describes event topics.
**/
public class DescribeEventTopicsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DescribeEventTopicsRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicNames")
    public String[] topicNames;
    public DescribeEventTopicsRequest withTopicNames(String[] topicNames) {
        this.topicNames = topicNames;
        return this;
    }
}