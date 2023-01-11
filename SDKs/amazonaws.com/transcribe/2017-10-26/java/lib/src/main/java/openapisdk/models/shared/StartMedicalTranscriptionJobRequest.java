package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartMedicalTranscriptionJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentIdentificationType")
    public MedicalContentIdentificationTypeEnum contentIdentificationType;
    public StartMedicalTranscriptionJobRequest withContentIdentificationType(MedicalContentIdentificationTypeEnum contentIdentificationType) {
        this.contentIdentificationType = contentIdentificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSEncryptionContext")
    public java.util.Map<String, String> kmsEncryptionContext;
    public StartMedicalTranscriptionJobRequest withKmsEncryptionContext(java.util.Map<String, String> kmsEncryptionContext) {
        this.kmsEncryptionContext = kmsEncryptionContext;
        return this;
    }
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public StartMedicalTranscriptionJobRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("Media")
    public Media media;
    public StartMedicalTranscriptionJobRequest withMedia(Media media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaFormat")
    public MediaFormatEnum mediaFormat;
    public StartMedicalTranscriptionJobRequest withMediaFormat(MediaFormatEnum mediaFormat) {
        this.mediaFormat = mediaFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaSampleRateHertz")
    public Long mediaSampleRateHertz;
    public StartMedicalTranscriptionJobRequest withMediaSampleRateHertz(Long mediaSampleRateHertz) {
        this.mediaSampleRateHertz = mediaSampleRateHertz;
        return this;
    }
    @JsonProperty("MedicalTranscriptionJobName")
    public String medicalTranscriptionJobName;
    public StartMedicalTranscriptionJobRequest withMedicalTranscriptionJobName(String medicalTranscriptionJobName) {
        this.medicalTranscriptionJobName = medicalTranscriptionJobName;
        return this;
    }
    @JsonProperty("OutputBucketName")
    public String outputBucketName;
    public StartMedicalTranscriptionJobRequest withOutputBucketName(String outputBucketName) {
        this.outputBucketName = outputBucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputEncryptionKMSKeyId")
    public String outputEncryptionKMSKeyId;
    public StartMedicalTranscriptionJobRequest withOutputEncryptionKmsKeyId(String outputEncryptionKMSKeyId) {
        this.outputEncryptionKMSKeyId = outputEncryptionKMSKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputKey")
    public String outputKey;
    public StartMedicalTranscriptionJobRequest withOutputKey(String outputKey) {
        this.outputKey = outputKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public MedicalTranscriptionSetting settings;
    public StartMedicalTranscriptionJobRequest withSettings(MedicalTranscriptionSetting settings) {
        this.settings = settings;
        return this;
    }
    @JsonProperty("Specialty")
    public SpecialtyEnum specialty;
    public StartMedicalTranscriptionJobRequest withSpecialty(SpecialtyEnum specialty) {
        this.specialty = specialty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public StartMedicalTranscriptionJobRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("Type")
    public TypeEnum type;
    public StartMedicalTranscriptionJobRequest withType(TypeEnum type) {
        this.type = type;
        return this;
    }
}