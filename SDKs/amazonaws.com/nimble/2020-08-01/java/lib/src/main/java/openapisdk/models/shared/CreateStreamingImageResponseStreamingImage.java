package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamingImageResponseStreamingImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public CreateStreamingImageResponseStreamingImage withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateStreamingImageResponseStreamingImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2ImageId")
    public String ec2ImageId;
    public CreateStreamingImageResponseStreamingImage withEc2ImageId(String ec2ImageId) {
        this.ec2ImageId = ec2ImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionConfiguration")
    public StreamingImageEncryptionConfiguration encryptionConfiguration;
    public CreateStreamingImageResponseStreamingImage withEncryptionConfiguration(StreamingImageEncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eulaIds")
    public String[] eulaIds;
    public CreateStreamingImageResponseStreamingImage withEulaIds(String[] eulaIds) {
        this.eulaIds = eulaIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateStreamingImageResponseStreamingImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public CreateStreamingImageResponseStreamingImage withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public String platform;
    public CreateStreamingImageResponseStreamingImage withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StreamingImageStateEnum state;
    public CreateStreamingImageResponseStreamingImage withState(StreamingImageStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public StreamingImageStatusCodeEnum statusCode;
    public CreateStreamingImageResponseStreamingImage withStatusCode(StreamingImageStatusCodeEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public CreateStreamingImageResponseStreamingImage withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImageId")
    public String streamingImageId;
    public CreateStreamingImageResponseStreamingImage withStreamingImageId(String streamingImageId) {
        this.streamingImageId = streamingImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateStreamingImageResponseStreamingImage withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}