package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LanguageModel
 * The structure used to describe a custom language model.
**/
public class LanguageModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseModelName")
    public BaseModelNameEnum baseModelName;
    public LanguageModel withBaseModelName(BaseModelNameEnum baseModelName) {
        this.baseModelName = baseModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public LanguageModel withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;
    public LanguageModel withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public LanguageModel withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public ClmLanguageCodeEnum languageCode;
    public LanguageModel withLanguageCode(ClmLanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTime")
    public OffsetDateTime lastModifiedTime;
    public LanguageModel withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelName")
    public String modelName;
    public LanguageModel withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelStatus")
    public ModelStatusEnum modelStatus;
    public LanguageModel withModelStatus(ModelStatusEnum modelStatus) {
        this.modelStatus = modelStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpgradeAvailability")
    public Boolean upgradeAvailability;
    public LanguageModel withUpgradeAvailability(Boolean upgradeAvailability) {
        this.upgradeAvailability = upgradeAvailability;
        return this;
    }
}