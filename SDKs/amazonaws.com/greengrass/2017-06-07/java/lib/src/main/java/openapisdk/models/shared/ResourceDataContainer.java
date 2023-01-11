package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceDataContainer
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
**/
public class ResourceDataContainer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalDeviceResourceData")
    public LocalDeviceResourceData localDeviceResourceData;
    public ResourceDataContainer withLocalDeviceResourceData(LocalDeviceResourceData localDeviceResourceData) {
        this.localDeviceResourceData = localDeviceResourceData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalVolumeResourceData")
    public LocalVolumeResourceData localVolumeResourceData;
    public ResourceDataContainer withLocalVolumeResourceData(LocalVolumeResourceData localVolumeResourceData) {
        this.localVolumeResourceData = localVolumeResourceData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3MachineLearningModelResourceData")
    public S3MachineLearningModelResourceData s3MachineLearningModelResourceData;
    public ResourceDataContainer withS3MachineLearningModelResourceData(S3MachineLearningModelResourceData s3MachineLearningModelResourceData) {
        this.s3MachineLearningModelResourceData = s3MachineLearningModelResourceData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SageMakerMachineLearningModelResourceData")
    public SageMakerMachineLearningModelResourceData sageMakerMachineLearningModelResourceData;
    public ResourceDataContainer withSageMakerMachineLearningModelResourceData(SageMakerMachineLearningModelResourceData sageMakerMachineLearningModelResourceData) {
        this.sageMakerMachineLearningModelResourceData = sageMakerMachineLearningModelResourceData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretsManagerSecretResourceData")
    public SecretsManagerSecretResourceData secretsManagerSecretResourceData;
    public ResourceDataContainer withSecretsManagerSecretResourceData(SecretsManagerSecretResourceData secretsManagerSecretResourceData) {
        this.secretsManagerSecretResourceData = secretsManagerSecretResourceData;
        return this;
    }
}