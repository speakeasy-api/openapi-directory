package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLanguageModelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseModelName")
    public BaseModelNameEnum baseModelName;
    public CreateLanguageModelResponse withBaseModelName(BaseModelNameEnum baseModelName) {
        this.baseModelName = baseModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public CreateLanguageModelResponse withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public ClmLanguageCodeEnum languageCode;
    public CreateLanguageModelResponse withLanguageCode(ClmLanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelName")
    public String modelName;
    public CreateLanguageModelResponse withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelStatus")
    public ModelStatusEnum modelStatus;
    public CreateLanguageModelResponse withModelStatus(ModelStatusEnum modelStatus) {
        this.modelStatus = modelStatus;
        return this;
    }
}