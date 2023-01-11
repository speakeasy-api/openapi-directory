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
 * CallAnalyticsJobSummary
 * Provides summary information about a call analytics job.
**/
public class CallAnalyticsJobSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CallAnalyticsJobName")
    public String callAnalyticsJobName;
    public CallAnalyticsJobSummary withCallAnalyticsJobName(String callAnalyticsJobName) {
        this.callAnalyticsJobName = callAnalyticsJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CallAnalyticsJobStatus")
    public CallAnalyticsJobStatusEnum callAnalyticsJobStatus;
    public CallAnalyticsJobSummary withCallAnalyticsJobStatus(CallAnalyticsJobStatusEnum callAnalyticsJobStatus) {
        this.callAnalyticsJobStatus = callAnalyticsJobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionTime")
    public OffsetDateTime completionTime;
    public CallAnalyticsJobSummary withCompletionTime(OffsetDateTime completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public CallAnalyticsJobSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;
    public CallAnalyticsJobSummary withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public CallAnalyticsJobSummary withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public CallAnalyticsJobSummary withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}