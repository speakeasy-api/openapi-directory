package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Settings
 * Provides optional settings for the <code>StartTranscriptionJob</code> operation.
**/
public class Settings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelIdentification")
    public Boolean channelIdentification;
    public Settings withChannelIdentification(Boolean channelIdentification) {
        this.channelIdentification = channelIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAlternatives")
    public Long maxAlternatives;
    public Settings withMaxAlternatives(Long maxAlternatives) {
        this.maxAlternatives = maxAlternatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxSpeakerLabels")
    public Long maxSpeakerLabels;
    public Settings withMaxSpeakerLabels(Long maxSpeakerLabels) {
        this.maxSpeakerLabels = maxSpeakerLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShowAlternatives")
    public Boolean showAlternatives;
    public Settings withShowAlternatives(Boolean showAlternatives) {
        this.showAlternatives = showAlternatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShowSpeakerLabels")
    public Boolean showSpeakerLabels;
    public Settings withShowSpeakerLabels(Boolean showSpeakerLabels) {
        this.showSpeakerLabels = showSpeakerLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyFilterMethod")
    public VocabularyFilterMethodEnum vocabularyFilterMethod;
    public Settings withVocabularyFilterMethod(VocabularyFilterMethodEnum vocabularyFilterMethod) {
        this.vocabularyFilterMethod = vocabularyFilterMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyFilterName")
    public String vocabularyFilterName;
    public Settings withVocabularyFilterName(String vocabularyFilterName) {
        this.vocabularyFilterName = vocabularyFilterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public Settings withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
}