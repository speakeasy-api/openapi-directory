package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StreamingSessionStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public StreamingSessionStream withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public StreamingSessionStream withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiresAt")
    public OffsetDateTime expiresAt;
    public StreamingSessionStream withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownedBy")
    public String ownedBy;
    public StreamingSessionStream withOwnedBy(String ownedBy) {
        this.ownedBy = ownedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StreamingSessionStreamStateEnum state;
    public StreamingSessionStream withState(StreamingSessionStreamStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public StreamingSessionStreamStatusCodeEnum statusCode;
    public StreamingSessionStream withStatusCode(StreamingSessionStreamStatusCodeEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamId")
    public String streamId;
    public StreamingSessionStream withStreamId(String streamId) {
        this.streamId = streamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public StreamingSessionStream withUrl(String url) {
        this.url = url;
        return this;
    }
}