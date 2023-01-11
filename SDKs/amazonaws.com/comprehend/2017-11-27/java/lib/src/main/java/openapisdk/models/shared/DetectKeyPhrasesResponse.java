package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectKeyPhrasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyPhrases")
    public KeyPhrase[] keyPhrases;
    public DetectKeyPhrasesResponse withKeyPhrases(KeyPhrase[] keyPhrases) {
        this.keyPhrases = keyPhrases;
        return this;
    }
}