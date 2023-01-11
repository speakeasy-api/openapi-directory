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
 * CallAnalyticsJob
 * Describes an asynchronous analytics job that was created with the <code>StartAnalyticsJob</code> operation.
**/
public class CallAnalyticsJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CallAnalyticsJobName")
    public String callAnalyticsJobName;
    public CallAnalyticsJob withCallAnalyticsJobName(String callAnalyticsJobName) {
        this.callAnalyticsJobName = callAnalyticsJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CallAnalyticsJobStatus")
    public CallAnalyticsJobStatusEnum callAnalyticsJobStatus;
    public CallAnalyticsJob withCallAnalyticsJobStatus(CallAnalyticsJobStatusEnum callAnalyticsJobStatus) {
        this.callAnalyticsJobStatus = callAnalyticsJobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelDefinitions")
    public ChannelDefinition[] channelDefinitions;
    public CallAnalyticsJob withChannelDefinitions(ChannelDefinition[] channelDefinitions) {
        this.channelDefinitions = channelDefinitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionTime")
    public OffsetDateTime completionTime;
    public CallAnalyticsJob withCompletionTime(OffsetDateTime completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public CallAnalyticsJob withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public CallAnalyticsJob withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;
    public CallAnalyticsJob withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentifiedLanguageScore")
    public Float identifiedLanguageScore;
    public CallAnalyticsJob withIdentifiedLanguageScore(Float identifiedLanguageScore) {
        this.identifiedLanguageScore = identifiedLanguageScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public CallAnalyticsJob withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Media")
    public Media media;
    public CallAnalyticsJob withMedia(Media media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaFormat")
    public MediaFormatEnum mediaFormat;
    public CallAnalyticsJob withMediaFormat(MediaFormatEnum mediaFormat) {
        this.mediaFormat = mediaFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaSampleRateHertz")
    public Long mediaSampleRateHertz;
    public CallAnalyticsJob withMediaSampleRateHertz(Long mediaSampleRateHertz) {
        this.mediaSampleRateHertz = mediaSampleRateHertz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public CallAnalyticsJobSettings settings;
    public CallAnalyticsJob withSettings(CallAnalyticsJobSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public CallAnalyticsJob withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Transcript")
    public Transcript transcript;
    public CallAnalyticsJob withTranscript(Transcript transcript) {
        this.transcript = transcript;
        return this;
    }
}