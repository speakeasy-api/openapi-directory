package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsLambdaFunctionCode
 * The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.
**/
public class AwsLambdaFunctionCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Bucket")
    public String s3Bucket;
    public AwsLambdaFunctionCode withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Key")
    public String s3Key;
    public AwsLambdaFunctionCode withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3ObjectVersion")
    public String s3ObjectVersion;
    public AwsLambdaFunctionCode withS3ObjectVersion(String s3ObjectVersion) {
        this.s3ObjectVersion = s3ObjectVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZipFile")
    public String zipFile;
    public AwsLambdaFunctionCode withZipFile(String zipFile) {
        this.zipFile = zipFile;
        return this;
    }
}