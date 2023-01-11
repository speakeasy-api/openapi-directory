package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsCountryDetails
 * An object containing additional information on the countries where this item is found
**/
public class BrandedFoodObjectItemsCountryDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("english_speaking")
    public Long englishSpeaking;
    public BrandedFoodObjectItemsCountryDetails withEnglishSpeaking(Long englishSpeaking) {
        this.englishSpeaking = englishSpeaking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_english_speaking")
    public Long nonEnglishSpeaking;
    public BrandedFoodObjectItemsCountryDetails withNonEnglishSpeaking(Long nonEnglishSpeaking) {
        this.nonEnglishSpeaking = nonEnglishSpeaking;
        return this;
    }
}