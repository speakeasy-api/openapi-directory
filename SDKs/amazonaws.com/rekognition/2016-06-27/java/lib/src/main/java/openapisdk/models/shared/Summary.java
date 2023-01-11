package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Summary
 * <p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p>
**/
public class Summary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Object")
    public S3Object s3Object;
    public Summary withS3Object(S3Object s3Object) {
        this.s3Object = s3Object;
        return this;
    }
}