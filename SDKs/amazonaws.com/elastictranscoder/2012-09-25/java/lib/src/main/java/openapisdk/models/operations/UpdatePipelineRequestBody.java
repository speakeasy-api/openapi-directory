package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePipelineRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsKmsKeyArn")
    public String awsKmsKeyArn;
    public UpdatePipelineRequestBody withAwsKmsKeyArn(String awsKmsKeyArn) {
        this.awsKmsKeyArn = awsKmsKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentConfig")
    public UpdatePipelineRequestBodyContentConfig contentConfig;
    public UpdatePipelineRequestBody withContentConfig(UpdatePipelineRequestBodyContentConfig contentConfig) {
        this.contentConfig = contentConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputBucket")
    public String inputBucket;
    public UpdatePipelineRequestBody withInputBucket(String inputBucket) {
        this.inputBucket = inputBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdatePipelineRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notifications")
    public UpdatePipelineRequestBodyNotifications notifications;
    public UpdatePipelineRequestBody withNotifications(UpdatePipelineRequestBodyNotifications notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String role;
    public UpdatePipelineRequestBody withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThumbnailConfig")
    public UpdatePipelineRequestBodyThumbnailConfig thumbnailConfig;
    public UpdatePipelineRequestBody withThumbnailConfig(UpdatePipelineRequestBodyThumbnailConfig thumbnailConfig) {
        this.thumbnailConfig = thumbnailConfig;
        return this;
    }
}