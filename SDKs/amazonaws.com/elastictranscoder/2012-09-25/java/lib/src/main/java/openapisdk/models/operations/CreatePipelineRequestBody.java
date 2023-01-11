package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePipelineRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsKmsKeyArn")
    public String awsKmsKeyArn;
    public CreatePipelineRequestBody withAwsKmsKeyArn(String awsKmsKeyArn) {
        this.awsKmsKeyArn = awsKmsKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentConfig")
    public CreatePipelineRequestBodyContentConfig contentConfig;
    public CreatePipelineRequestBody withContentConfig(CreatePipelineRequestBodyContentConfig contentConfig) {
        this.contentConfig = contentConfig;
        return this;
    }
    @JsonProperty("InputBucket")
    public String inputBucket;
    public CreatePipelineRequestBody withInputBucket(String inputBucket) {
        this.inputBucket = inputBucket;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreatePipelineRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notifications")
    public CreatePipelineRequestBodyNotifications notifications;
    public CreatePipelineRequestBody withNotifications(CreatePipelineRequestBodyNotifications notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputBucket")
    public String outputBucket;
    public CreatePipelineRequestBody withOutputBucket(String outputBucket) {
        this.outputBucket = outputBucket;
        return this;
    }
    @JsonProperty("Role")
    public String role;
    public CreatePipelineRequestBody withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThumbnailConfig")
    public CreatePipelineRequestBodyThumbnailConfig thumbnailConfig;
    public CreatePipelineRequestBody withThumbnailConfig(CreatePipelineRequestBodyThumbnailConfig thumbnailConfig) {
        this.thumbnailConfig = thumbnailConfig;
        return this;
    }
}