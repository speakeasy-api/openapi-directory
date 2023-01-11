package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTextTranslationJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextTranslationJobProperties")
    public TextTranslationJobProperties textTranslationJobProperties;
    public DescribeTextTranslationJobResponse withTextTranslationJobProperties(TextTranslationJobProperties textTranslationJobProperties) {
        this.textTranslationJobProperties = textTranslationJobProperties;
        return this;
    }
}