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
 * MedicalTranscriptionJob
 * The data structure that contains the information for a medical transcription job.
**/
public class MedicalTranscriptionJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionTime")
    public OffsetDateTime completionTime;
    public MedicalTranscriptionJob withCompletionTime(OffsetDateTime completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentIdentificationType")
    public MedicalContentIdentificationTypeEnum contentIdentificationType;
    public MedicalTranscriptionJob withContentIdentificationType(MedicalContentIdentificationTypeEnum contentIdentificationType) {
        this.contentIdentificationType = contentIdentificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public MedicalTranscriptionJob withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;
    public MedicalTranscriptionJob withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public MedicalTranscriptionJob withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Media")
    public Media media;
    public MedicalTranscriptionJob withMedia(Media media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaFormat")
    public MediaFormatEnum mediaFormat;
    public MedicalTranscriptionJob withMediaFormat(MediaFormatEnum mediaFormat) {
        this.mediaFormat = mediaFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaSampleRateHertz")
    public Long mediaSampleRateHertz;
    public MedicalTranscriptionJob withMediaSampleRateHertz(Long mediaSampleRateHertz) {
        this.mediaSampleRateHertz = mediaSampleRateHertz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MedicalTranscriptionJobName")
    public String medicalTranscriptionJobName;
    public MedicalTranscriptionJob withMedicalTranscriptionJobName(String medicalTranscriptionJobName) {
        this.medicalTranscriptionJobName = medicalTranscriptionJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public MedicalTranscriptionSetting settings;
    public MedicalTranscriptionJob withSettings(MedicalTranscriptionSetting settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Specialty")
    public SpecialtyEnum specialty;
    public MedicalTranscriptionJob withSpecialty(SpecialtyEnum specialty) {
        this.specialty = specialty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public MedicalTranscriptionJob withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public MedicalTranscriptionJob withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Transcript")
    public MedicalTranscript transcript;
    public MedicalTranscriptionJob withTranscript(MedicalTranscript transcript) {
        this.transcript = transcript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptionJobStatus")
    public TranscriptionJobStatusEnum transcriptionJobStatus;
    public MedicalTranscriptionJob withTranscriptionJobStatus(TranscriptionJobStatusEnum transcriptionJobStatus) {
        this.transcriptionJobStatus = transcriptionJobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public TypeEnum type;
    public MedicalTranscriptionJob withType(TypeEnum type) {
        this.type = type;
        return this;
    }
}