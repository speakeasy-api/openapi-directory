package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStreamingImageResponseStreamingImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public UpdateStreamingImageResponseStreamingImage withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateStreamingImageResponseStreamingImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2ImageId")
    public String ec2ImageId;
    public UpdateStreamingImageResponseStreamingImage withEc2ImageId(String ec2ImageId) {
        this.ec2ImageId = ec2ImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfiguration")
    public StreamingImageEncryptionConfiguration encryptionConfiguration;
    public UpdateStreamingImageResponseStreamingImage withEncryptionConfiguration(StreamingImageEncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eulaIds")
    public String[] eulaIds;
    public UpdateStreamingImageResponseStreamingImage withEulaIds(String[] eulaIds) {
        this.eulaIds = eulaIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateStreamingImageResponseStreamingImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public UpdateStreamingImageResponseStreamingImage withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public String platform;
    public UpdateStreamingImageResponseStreamingImage withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StreamingImageStateEnum state;
    public UpdateStreamingImageResponseStreamingImage withState(StreamingImageStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public StreamingImageStatusCodeEnum statusCode;
    public UpdateStreamingImageResponseStreamingImage withStatusCode(StreamingImageStatusCodeEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public UpdateStreamingImageResponseStreamingImage withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImageId")
    public String streamingImageId;
    public UpdateStreamingImageResponseStreamingImage withStreamingImageId(String streamingImageId) {
        this.streamingImageId = streamingImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public UpdateStreamingImageResponseStreamingImage withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}