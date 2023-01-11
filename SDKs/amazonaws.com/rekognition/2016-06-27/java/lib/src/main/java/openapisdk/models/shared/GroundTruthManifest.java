package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroundTruthManifest
 * The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file. 
**/
public class GroundTruthManifest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Object")
    public S3Object s3Object;
    public GroundTruthManifest withS3Object(S3Object s3Object) {
        this.s3Object = s3Object;
        return this;
    }
}