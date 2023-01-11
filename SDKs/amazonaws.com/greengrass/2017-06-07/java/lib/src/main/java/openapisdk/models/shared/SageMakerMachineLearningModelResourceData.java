package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SageMakerMachineLearningModelResourceData
 * Attributes that define an Amazon SageMaker machine learning resource.
**/
public class SageMakerMachineLearningModelResourceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationPath")
    public String destinationPath;
    public SageMakerMachineLearningModelResourceData withDestinationPath(String destinationPath) {
        this.destinationPath = destinationPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerSetting")
    public ResourceDownloadOwnerSetting ownerSetting;
    public SageMakerMachineLearningModelResourceData withOwnerSetting(ResourceDownloadOwnerSetting ownerSetting) {
        this.ownerSetting = ownerSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SageMakerJobArn")
    public String sageMakerJobArn;
    public SageMakerMachineLearningModelResourceData withSageMakerJobArn(String sageMakerJobArn) {
        this.sageMakerJobArn = sageMakerJobArn;
        return this;
    }
}