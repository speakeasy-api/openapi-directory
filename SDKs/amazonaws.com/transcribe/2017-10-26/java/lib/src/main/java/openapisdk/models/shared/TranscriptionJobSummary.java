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
 * TranscriptionJobSummary
 * Provides a summary of information about a transcription job.
**/
public class TranscriptionJobSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionTime")
    public OffsetDateTime completionTime;
    public TranscriptionJobSummary withCompletionTime(OffsetDateTime completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentRedaction")
    public ContentRedaction contentRedaction;
    public TranscriptionJobSummary withContentRedaction(ContentRedaction contentRedaction) {
        this.contentRedaction = contentRedaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public TranscriptionJobSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;
    public TranscriptionJobSummary withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentifiedLanguageScore")
    public Float identifiedLanguageScore;
    public TranscriptionJobSummary withIdentifiedLanguageScore(Float identifiedLanguageScore) {
        this.identifiedLanguageScore = identifiedLanguageScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentifyLanguage")
    public Boolean identifyLanguage;
    public TranscriptionJobSummary withIdentifyLanguage(Boolean identifyLanguage) {
        this.identifyLanguage = identifyLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public TranscriptionJobSummary withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelSettings")
    public ModelSettings modelSettings;
    public TranscriptionJobSummary withModelSettings(ModelSettings modelSettings) {
        this.modelSettings = modelSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputLocationType")
    public OutputLocationTypeEnum outputLocationType;
    public TranscriptionJobSummary withOutputLocationType(OutputLocationTypeEnum outputLocationType) {
        this.outputLocationType = outputLocationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public TranscriptionJobSummary withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptionJobName")
    public String transcriptionJobName;
    public TranscriptionJobSummary withTranscriptionJobName(String transcriptionJobName) {
        this.transcriptionJobName = transcriptionJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptionJobStatus")
    public TranscriptionJobStatusEnum transcriptionJobStatus;
    public TranscriptionJobSummary withTranscriptionJobStatus(TranscriptionJobStatusEnum transcriptionJobStatus) {
        this.transcriptionJobStatus = transcriptionJobStatus;
        return this;
    }
}