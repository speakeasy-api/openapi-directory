package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MedicalTranscriptionSetting
 * Optional settings for the <a>StartMedicalTranscriptionJob</a> operation.
**/
public class MedicalTranscriptionSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelIdentification")
    public Boolean channelIdentification;
    public MedicalTranscriptionSetting withChannelIdentification(Boolean channelIdentification) {
        this.channelIdentification = channelIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAlternatives")
    public Long maxAlternatives;
    public MedicalTranscriptionSetting withMaxAlternatives(Long maxAlternatives) {
        this.maxAlternatives = maxAlternatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxSpeakerLabels")
    public Long maxSpeakerLabels;
    public MedicalTranscriptionSetting withMaxSpeakerLabels(Long maxSpeakerLabels) {
        this.maxSpeakerLabels = maxSpeakerLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShowAlternatives")
    public Boolean showAlternatives;
    public MedicalTranscriptionSetting withShowAlternatives(Boolean showAlternatives) {
        this.showAlternatives = showAlternatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShowSpeakerLabels")
    public Boolean showSpeakerLabels;
    public MedicalTranscriptionSetting withShowSpeakerLabels(Boolean showSpeakerLabels) {
        this.showSpeakerLabels = showSpeakerLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public MedicalTranscriptionSetting withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}