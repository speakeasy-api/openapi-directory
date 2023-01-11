package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDetectSyntaxRequest {
    @JsonProperty("LanguageCode")
    public SyntaxLanguageCodeEnum languageCode;
    public BatchDetectSyntaxRequest withLanguageCode(SyntaxLanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("TextList")
    public String[] textList;
    public BatchDetectSyntaxRequest withTextList(String[] textList) {
        this.textList = textList;
        return this;
    }
}