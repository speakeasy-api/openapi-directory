package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLanguageModelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageModel")
    public LanguageModel languageModel;
    public DescribeLanguageModelResponse withLanguageModel(LanguageModel languageModel) {
        this.languageModel = languageModel;
        return this;
    }
}