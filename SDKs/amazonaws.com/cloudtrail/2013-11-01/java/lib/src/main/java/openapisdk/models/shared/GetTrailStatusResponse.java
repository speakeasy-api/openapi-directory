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
 * GetTrailStatusResponse
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
public class GetTrailStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsLogging")
    public Boolean isLogging;
    public GetTrailStatusResponse withIsLogging(Boolean isLogging) {
        this.isLogging = isLogging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestCloudWatchLogsDeliveryError")
    public String latestCloudWatchLogsDeliveryError;
    public GetTrailStatusResponse withLatestCloudWatchLogsDeliveryError(String latestCloudWatchLogsDeliveryError) {
        this.latestCloudWatchLogsDeliveryError = latestCloudWatchLogsDeliveryError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LatestCloudWatchLogsDeliveryTime")
    public OffsetDateTime latestCloudWatchLogsDeliveryTime;
    public GetTrailStatusResponse withLatestCloudWatchLogsDeliveryTime(OffsetDateTime latestCloudWatchLogsDeliveryTime) {
        this.latestCloudWatchLogsDeliveryTime = latestCloudWatchLogsDeliveryTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestDeliveryAttemptSucceeded")
    public String latestDeliveryAttemptSucceeded;
    public GetTrailStatusResponse withLatestDeliveryAttemptSucceeded(String latestDeliveryAttemptSucceeded) {
        this.latestDeliveryAttemptSucceeded = latestDeliveryAttemptSucceeded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestDeliveryAttemptTime")
    public String latestDeliveryAttemptTime;
    public GetTrailStatusResponse withLatestDeliveryAttemptTime(String latestDeliveryAttemptTime) {
        this.latestDeliveryAttemptTime = latestDeliveryAttemptTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestDeliveryError")
    public String latestDeliveryError;
    public GetTrailStatusResponse withLatestDeliveryError(String latestDeliveryError) {
        this.latestDeliveryError = latestDeliveryError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LatestDeliveryTime")
    public OffsetDateTime latestDeliveryTime;
    public GetTrailStatusResponse withLatestDeliveryTime(OffsetDateTime latestDeliveryTime) {
        this.latestDeliveryTime = latestDeliveryTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestDigestDeliveryError")
    public String latestDigestDeliveryError;
    public GetTrailStatusResponse withLatestDigestDeliveryError(String latestDigestDeliveryError) {
        this.latestDigestDeliveryError = latestDigestDeliveryError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LatestDigestDeliveryTime")
    public OffsetDateTime latestDigestDeliveryTime;
    public GetTrailStatusResponse withLatestDigestDeliveryTime(OffsetDateTime latestDigestDeliveryTime) {
        this.latestDigestDeliveryTime = latestDigestDeliveryTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestNotificationAttemptSucceeded")
    public String latestNotificationAttemptSucceeded;
    public GetTrailStatusResponse withLatestNotificationAttemptSucceeded(String latestNotificationAttemptSucceeded) {
        this.latestNotificationAttemptSucceeded = latestNotificationAttemptSucceeded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestNotificationAttemptTime")
    public String latestNotificationAttemptTime;
    public GetTrailStatusResponse withLatestNotificationAttemptTime(String latestNotificationAttemptTime) {
        this.latestNotificationAttemptTime = latestNotificationAttemptTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestNotificationError")
    public String latestNotificationError;
    public GetTrailStatusResponse withLatestNotificationError(String latestNotificationError) {
        this.latestNotificationError = latestNotificationError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LatestNotificationTime")
    public OffsetDateTime latestNotificationTime;
    public GetTrailStatusResponse withLatestNotificationTime(OffsetDateTime latestNotificationTime) {
        this.latestNotificationTime = latestNotificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartLoggingTime")
    public OffsetDateTime startLoggingTime;
    public GetTrailStatusResponse withStartLoggingTime(OffsetDateTime startLoggingTime) {
        this.startLoggingTime = startLoggingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StopLoggingTime")
    public OffsetDateTime stopLoggingTime;
    public GetTrailStatusResponse withStopLoggingTime(OffsetDateTime stopLoggingTime) {
        this.stopLoggingTime = stopLoggingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeLoggingStarted")
    public String timeLoggingStarted;
    public GetTrailStatusResponse withTimeLoggingStarted(String timeLoggingStarted) {
        this.timeLoggingStarted = timeLoggingStarted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeLoggingStopped")
    public String timeLoggingStopped;
    public GetTrailStatusResponse withTimeLoggingStopped(String timeLoggingStopped) {
        this.timeLoggingStopped = timeLoggingStopped;
        return this;
    }
}