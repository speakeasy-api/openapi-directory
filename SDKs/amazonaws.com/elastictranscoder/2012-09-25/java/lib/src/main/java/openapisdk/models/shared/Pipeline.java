package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pipeline
 * The pipeline (queue) that is used to manage jobs.
**/
public class Pipeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public Pipeline withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsKmsKeyArn")
    public String awsKmsKeyArn;
    public Pipeline withAwsKmsKeyArn(String awsKmsKeyArn) {
        this.awsKmsKeyArn = awsKmsKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentConfig")
    public PipelineOutputConfig contentConfig;
    public Pipeline withContentConfig(PipelineOutputConfig contentConfig) {
        this.contentConfig = contentConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public Pipeline withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputBucket")
    public String inputBucket;
    public Pipeline withInputBucket(String inputBucket) {
        this.inputBucket = inputBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Pipeline withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notifications")
    public Notifications notifications;
    public Pipeline withNotifications(Notifications notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputBucket")
    public String outputBucket;
    public Pipeline withOutputBucket(String outputBucket) {
        this.outputBucket = outputBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String role;
    public Pipeline withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public Pipeline withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThumbnailConfig")
    public PipelineOutputConfig thumbnailConfig;
    public Pipeline withThumbnailConfig(PipelineOutputConfig thumbnailConfig) {
        this.thumbnailConfig = thumbnailConfig;
        return this;
    }
}