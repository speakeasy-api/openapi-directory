package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutoCorrections {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phrase")
    public String phrase;
    public AutoCorrections withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
}