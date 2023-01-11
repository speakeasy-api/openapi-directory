package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateExportJobRequestBodyExportJobRequest
 * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
**/
public class CreateExportJobRequestBodyExportJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public CreateExportJobRequestBodyExportJobRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3UrlPrefix")
    public String s3UrlPrefix;
    public CreateExportJobRequestBodyExportJobRequest withS3UrlPrefix(String s3UrlPrefix) {
        this.s3UrlPrefix = s3UrlPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentId")
    public String segmentId;
    public CreateExportJobRequestBodyExportJobRequest withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SegmentVersion")
    public Long segmentVersion;
    public CreateExportJobRequestBodyExportJobRequest withSegmentVersion(Long segmentVersion) {
        this.segmentVersion = segmentVersion;
        return this;
    }
}