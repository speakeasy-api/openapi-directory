package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEntityRecognizerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public CreateEntityRecognizerRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public CreateEntityRecognizerRequest withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonProperty("InputDataConfig")
    public EntityRecognizerInputDataConfig inputDataConfig;
    public CreateEntityRecognizerRequest withInputDataConfig(EntityRecognizerInputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public CreateEntityRecognizerRequest withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelKmsKeyId")
    public String modelKmsKeyId;
    public CreateEntityRecognizerRequest withModelKmsKeyId(String modelKmsKeyId) {
        this.modelKmsKeyId = modelKmsKeyId;
        return this;
    }
    @JsonProperty("RecognizerName")
    public String recognizerName;
    public CreateEntityRecognizerRequest withRecognizerName(String recognizerName) {
        this.recognizerName = recognizerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateEntityRecognizerRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeKmsKeyId")
    public String volumeKmsKeyId;
    public CreateEntityRecognizerRequest withVolumeKmsKeyId(String volumeKmsKeyId) {
        this.volumeKmsKeyId = volumeKmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public VpcConfig vpcConfig;
    public CreateEntityRecognizerRequest withVpcConfig(VpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}