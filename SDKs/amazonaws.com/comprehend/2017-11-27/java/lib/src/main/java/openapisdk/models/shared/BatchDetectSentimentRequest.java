package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDetectSentimentRequest {
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public BatchDetectSentimentRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("TextList")
    public String[] textList;
    public BatchDetectSentimentRequest withTextList(String[] textList) {
        this.textList = textList;
        return this;
    }
}