package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3MachineLearningModelResourceData
 * Attributes that define an Amazon S3 machine learning resource.
**/
public class S3MachineLearningModelResourceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationPath")
    public String destinationPath;
    public S3MachineLearningModelResourceData withDestinationPath(String destinationPath) {
        this.destinationPath = destinationPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerSetting")
    public ResourceDownloadOwnerSetting ownerSetting;
    public S3MachineLearningModelResourceData withOwnerSetting(ResourceDownloadOwnerSetting ownerSetting) {
        this.ownerSetting = ownerSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Uri")
    public String s3Uri;
    public S3MachineLearningModelResourceData withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}