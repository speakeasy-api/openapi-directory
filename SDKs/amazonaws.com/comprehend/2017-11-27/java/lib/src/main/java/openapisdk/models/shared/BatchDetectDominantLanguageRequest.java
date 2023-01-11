package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDetectDominantLanguageRequest {
    @JsonProperty("TextList")
    public String[] textList;
    public BatchDetectDominantLanguageRequest withTextList(String[] textList) {
        this.textList = textList;
        return this;
    }
}