package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFunctionCodeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public UpdateFunctionCodeRequestBody withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageUri")
    public String imageUri;
    public UpdateFunctionCodeRequestBody withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publish")
    public Boolean publish;
    public UpdateFunctionCodeRequestBody withPublish(Boolean publish) {
        this.publish = publish;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevisionId")
    public String revisionId;
    public UpdateFunctionCodeRequestBody withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Bucket")
    public String s3Bucket;
    public UpdateFunctionCodeRequestBody withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Key")
    public String s3Key;
    public UpdateFunctionCodeRequestBody withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3ObjectVersion")
    public String s3ObjectVersion;
    public UpdateFunctionCodeRequestBody withS3ObjectVersion(String s3ObjectVersion) {
        this.s3ObjectVersion = s3ObjectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZipFile")
    public String zipFile;
    public UpdateFunctionCodeRequestBody withZipFile(String zipFile) {
        this.zipFile = zipFile;
        return this;
    }
}