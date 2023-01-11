package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeComponentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public DescribeComponentResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentName")
    public String componentName;
    public DescribeComponentResponse withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentVersion")
    public String componentVersion;
    public DescribeComponentResponse withComponentVersion(String componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTimestamp")
    public OffsetDateTime creationTimestamp;
    public DescribeComponentResponse withCreationTimestamp(OffsetDateTime creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DescribeComponentResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platforms")
    public ComponentPlatform[] platforms;
    public DescribeComponentResponse withPlatforms(ComponentPlatform[] platforms) {
        this.platforms = platforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public DescribeComponentResponse withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CloudComponentStatus status;
    public DescribeComponentResponse withStatus(CloudComponentStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public DescribeComponentResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}