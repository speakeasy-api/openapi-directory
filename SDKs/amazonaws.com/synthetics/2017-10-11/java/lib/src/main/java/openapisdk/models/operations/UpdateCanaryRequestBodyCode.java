package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCanaryRequestBodyCode
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>. 
**/
public class UpdateCanaryRequestBodyCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Handler")
    public String handler;
    public UpdateCanaryRequestBodyCode withHandler(String handler) {
        this.handler = handler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Bucket")
    public String s3Bucket;
    public UpdateCanaryRequestBodyCode withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Key")
    public String s3Key;
    public UpdateCanaryRequestBodyCode withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Version")
    public String s3Version;
    public UpdateCanaryRequestBodyCode withS3Version(String s3Version) {
        this.s3Version = s3Version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZipFile")
    public String zipFile;
    public UpdateCanaryRequestBodyCode withZipFile(String zipFile) {
        this.zipFile = zipFile;
        return this;
    }
}