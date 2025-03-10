/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * TranscriptionJob - &lt;p&gt;Provides detailed information about a transcription job.&lt;/p&gt; &lt;p&gt;To view the status of the specified transcription job, check the &lt;code&gt;TranscriptionJobStatus&lt;/code&gt; field. If the status is &lt;code&gt;COMPLETED&lt;/code&gt;, the job is finished and you can find the results at the location specified in &lt;code&gt;TranscriptFileUri&lt;/code&gt;. If the status is &lt;code&gt;FAILED&lt;/code&gt;, &lt;code&gt;FailureReason&lt;/code&gt; provides details on why your transcription job failed.&lt;/p&gt; &lt;p&gt;If you enabled content redaction, the redacted transcript can be found at the location specified in &lt;code&gt;RedactedTranscriptFileUri&lt;/code&gt;.&lt;/p&gt;
 */
public class TranscriptionJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CompletionTime")
    public OffsetDateTime completionTime;

    public TranscriptionJob withCompletionTime(OffsetDateTime completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentRedaction")
    public ContentRedaction contentRedaction;

    public TranscriptionJob withContentRedaction(ContentRedaction contentRedaction) {
        this.contentRedaction = contentRedaction;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;

    public TranscriptionJob withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;

    public TranscriptionJob withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentifiedLanguageScore")
    public Float identifiedLanguageScore;

    public TranscriptionJob withIdentifiedLanguageScore(Float identifiedLanguageScore) {
        this.identifiedLanguageScore = identifiedLanguageScore;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentifyLanguage")
    public Boolean identifyLanguage;

    public TranscriptionJob withIdentifyLanguage(Boolean identifyLanguage) {
        this.identifyLanguage = identifyLanguage;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentifyMultipleLanguages")
    public Boolean identifyMultipleLanguages;

    public TranscriptionJob withIdentifyMultipleLanguages(Boolean identifyMultipleLanguages) {
        this.identifyMultipleLanguages = identifyMultipleLanguages;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobExecutionSettings")
    public JobExecutionSettings jobExecutionSettings;

    public TranscriptionJob withJobExecutionSettings(JobExecutionSettings jobExecutionSettings) {
        this.jobExecutionSettings = jobExecutionSettings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;

    public TranscriptionJob withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCodes")
    public LanguageCodeItem[] languageCodes;

    public TranscriptionJob withLanguageCodes(LanguageCodeItem[] languageCodes) {
        this.languageCodes = languageCodes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageIdSettings")
    public java.util.Map<String, LanguageIdSettings> languageIdSettings;

    public TranscriptionJob withLanguageIdSettings(java.util.Map<String, LanguageIdSettings> languageIdSettings) {
        this.languageIdSettings = languageIdSettings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageOptions")
    public LanguageCodeEnum[] languageOptions;

    public TranscriptionJob withLanguageOptions(LanguageCodeEnum[] languageOptions) {
        this.languageOptions = languageOptions;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Media")
    public Media media;

    public TranscriptionJob withMedia(Media media) {
        this.media = media;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaFormat")
    public MediaFormatEnum mediaFormat;

    public TranscriptionJob withMediaFormat(MediaFormatEnum mediaFormat) {
        this.mediaFormat = mediaFormat;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaSampleRateHertz")
    public Long mediaSampleRateHertz;

    public TranscriptionJob withMediaSampleRateHertz(Long mediaSampleRateHertz) {
        this.mediaSampleRateHertz = mediaSampleRateHertz;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelSettings")
    public ModelSettings modelSettings;

    public TranscriptionJob withModelSettings(ModelSettings modelSettings) {
        this.modelSettings = modelSettings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public Settings settings;

    public TranscriptionJob withSettings(Settings settings) {
        this.settings = settings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;

    public TranscriptionJob withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subtitles")
    public SubtitlesOutput subtitles;

    public TranscriptionJob withSubtitles(SubtitlesOutput subtitles) {
        this.subtitles = subtitles;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;

    public TranscriptionJob withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Transcript")
    public Transcript transcript;

    public TranscriptionJob withTranscript(Transcript transcript) {
        this.transcript = transcript;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptionJobName")
    public String transcriptionJobName;

    public TranscriptionJob withTranscriptionJobName(String transcriptionJobName) {
        this.transcriptionJobName = transcriptionJobName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptionJobStatus")
    public TranscriptionJobStatusEnum transcriptionJobStatus;

    public TranscriptionJob withTranscriptionJobStatus(TranscriptionJobStatusEnum transcriptionJobStatus) {
        this.transcriptionJobStatus = transcriptionJobStatus;
        return this;
    }
    
    public TranscriptionJob(){}
}
