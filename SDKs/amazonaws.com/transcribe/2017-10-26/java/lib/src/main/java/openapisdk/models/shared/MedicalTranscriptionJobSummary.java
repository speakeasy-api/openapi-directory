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
 * MedicalTranscriptionJobSummary
 * Provides summary information about a transcription job.
**/
public class MedicalTranscriptionJobSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionTime")
    public OffsetDateTime completionTime;
    public MedicalTranscriptionJobSummary withCompletionTime(OffsetDateTime completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentIdentificationType")
    public MedicalContentIdentificationTypeEnum contentIdentificationType;
    public MedicalTranscriptionJobSummary withContentIdentificationType(MedicalContentIdentificationTypeEnum contentIdentificationType) {
        this.contentIdentificationType = contentIdentificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public MedicalTranscriptionJobSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;
    public MedicalTranscriptionJobSummary withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public MedicalTranscriptionJobSummary withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MedicalTranscriptionJobName")
    public String medicalTranscriptionJobName;
    public MedicalTranscriptionJobSummary withMedicalTranscriptionJobName(String medicalTranscriptionJobName) {
        this.medicalTranscriptionJobName = medicalTranscriptionJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputLocationType")
    public OutputLocationTypeEnum outputLocationType;
    public MedicalTranscriptionJobSummary withOutputLocationType(OutputLocationTypeEnum outputLocationType) {
        this.outputLocationType = outputLocationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Specialty")
    public SpecialtyEnum specialty;
    public MedicalTranscriptionJobSummary withSpecialty(SpecialtyEnum specialty) {
        this.specialty = specialty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public MedicalTranscriptionJobSummary withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptionJobStatus")
    public TranscriptionJobStatusEnum transcriptionJobStatus;
    public MedicalTranscriptionJobSummary withTranscriptionJobStatus(TranscriptionJobStatusEnum transcriptionJobStatus) {
        this.transcriptionJobStatus = transcriptionJobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public TypeEnum type;
    public MedicalTranscriptionJobSummary withType(TypeEnum type) {
        this.type = type;
        return this;
    }
}