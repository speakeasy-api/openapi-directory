package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFunctionRequestBodyCode
 * The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
**/
public class CreateFunctionRequestBodyCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageUri")
    public String imageUri;
    public CreateFunctionRequestBodyCode withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Bucket")
    public String s3Bucket;
    public CreateFunctionRequestBodyCode withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Key")
    public String s3Key;
    public CreateFunctionRequestBodyCode withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3ObjectVersion")
    public String s3ObjectVersion;
    public CreateFunctionRequestBodyCode withS3ObjectVersion(String s3ObjectVersion) {
        this.s3ObjectVersion = s3ObjectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZipFile")
    public String zipFile;
    public CreateFunctionRequestBodyCode withZipFile(String zipFile) {
        this.zipFile = zipFile;
        return this;
    }
}