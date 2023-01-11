package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Video
 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
**/
public class Video {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Object")
    public S3Object s3Object;
    public Video withS3Object(S3Object s3Object) {
        this.s3Object = s3Object;
        return this;
    }
}