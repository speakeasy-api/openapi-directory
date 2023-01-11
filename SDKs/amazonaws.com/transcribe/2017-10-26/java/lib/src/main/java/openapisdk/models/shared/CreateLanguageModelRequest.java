package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLanguageModelRequest {
    @JsonProperty("BaseModelName")
    public BaseModelNameEnum baseModelName;
    public CreateLanguageModelRequest withBaseModelName(BaseModelNameEnum baseModelName) {
        this.baseModelName = baseModelName;
        return this;
    }
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public CreateLanguageModelRequest withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonProperty("LanguageCode")
    public ClmLanguageCodeEnum languageCode;
    public CreateLanguageModelRequest withLanguageCode(ClmLanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonProperty("ModelName")
    public String modelName;
    public CreateLanguageModelRequest withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateLanguageModelRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}