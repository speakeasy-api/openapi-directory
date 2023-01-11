package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RelatedSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phrase")
    public String phrase;
    public RelatedSearch withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public RelatedSearch withUrl(String url) {
        this.url = url;
        return this;
    }
}