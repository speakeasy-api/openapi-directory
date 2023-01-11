package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StreamingSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public StreamingSession withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public StreamingSession withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public StreamingSession withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2InstanceType")
    public String ec2InstanceType;
    public StreamingSession withEc2InstanceType(String ec2InstanceType) {
        this.ec2InstanceType = ec2InstanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchProfileId")
    public String launchProfileId;
    public StreamingSession withLaunchProfileId(String launchProfileId) {
        this.launchProfileId = launchProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownedBy")
    public String ownedBy;
    public StreamingSession withOwnedBy(String ownedBy) {
        this.ownedBy = ownedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public StreamingSession withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StreamingSessionStateEnum state;
    public StreamingSession withState(StreamingSessionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public StreamingSessionStatusCodeEnum statusCode;
    public StreamingSession withStatusCode(StreamingSessionStatusCodeEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public StreamingSession withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImageId")
    public String streamingImageId;
    public StreamingSession withStreamingImageId(String streamingImageId) {
        this.streamingImageId = streamingImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public StreamingSession withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("terminateAt")
    public OffsetDateTime terminateAt;
    public StreamingSession withTerminateAt(OffsetDateTime terminateAt) {
        this.terminateAt = terminateAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public StreamingSession withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public String updatedBy;
    public StreamingSession withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}