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
 * EntityRecognizerProperties
 * Describes information about an entity recognizer.
**/
public class EntityRecognizerProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public EntityRecognizerProperties withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public EntityRecognizerProperties withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityRecognizerArn")
    public String entityRecognizerArn;
    public EntityRecognizerProperties withEntityRecognizerArn(String entityRecognizerArn) {
        this.entityRecognizerArn = entityRecognizerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDataConfig")
    public EntityRecognizerInputDataConfig inputDataConfig;
    public EntityRecognizerProperties withInputDataConfig(EntityRecognizerInputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public EntityRecognizerProperties withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public EntityRecognizerProperties withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelKmsKeyId")
    public String modelKmsKeyId;
    public EntityRecognizerProperties withModelKmsKeyId(String modelKmsKeyId) {
        this.modelKmsKeyId = modelKmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecognizerMetadata")
    public EntityRecognizerMetadata recognizerMetadata;
    public EntityRecognizerProperties withRecognizerMetadata(EntityRecognizerMetadata recognizerMetadata) {
        this.recognizerMetadata = recognizerMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ModelStatusEnum status;
    public EntityRecognizerProperties withStatus(ModelStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmitTime")
    public OffsetDateTime submitTime;
    public EntityRecognizerProperties withSubmitTime(OffsetDateTime submitTime) {
        this.submitTime = submitTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TrainingEndTime")
    public OffsetDateTime trainingEndTime;
    public EntityRecognizerProperties withTrainingEndTime(OffsetDateTime trainingEndTime) {
        this.trainingEndTime = trainingEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TrainingStartTime")
    public OffsetDateTime trainingStartTime;
    public EntityRecognizerProperties withTrainingStartTime(OffsetDateTime trainingStartTime) {
        this.trainingStartTime = trainingStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeKmsKeyId")
    public String volumeKmsKeyId;
    public EntityRecognizerProperties withVolumeKmsKeyId(String volumeKmsKeyId) {
        this.volumeKmsKeyId = volumeKmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public VpcConfig vpcConfig;
    public EntityRecognizerProperties withVpcConfig(VpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}