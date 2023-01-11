package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3ObjectDetails
 * Details about an Amazon S3 object.
**/
public class AwsS3ObjectDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentType")
    public String contentType;
    public AwsS3ObjectDetails withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ETag")
    public String eTag;
    public AwsS3ObjectDetails withETag(String eTag) {
        this.eTag = eTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModified")
    public String lastModified;
    public AwsS3ObjectDetails withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SSEKMSKeyId")
    public String ssekmsKeyId;
    public AwsS3ObjectDetails withSsekmsKeyId(String ssekmsKeyId) {
        this.ssekmsKeyId = ssekmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerSideEncryption")
    public String serverSideEncryption;
    public AwsS3ObjectDetails withServerSideEncryption(String serverSideEncryption) {
        this.serverSideEncryption = serverSideEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionId")
    public String versionId;
    public AwsS3ObjectDetails withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}