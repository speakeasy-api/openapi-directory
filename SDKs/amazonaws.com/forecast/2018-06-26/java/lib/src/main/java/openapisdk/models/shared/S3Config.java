package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3Config
 * The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.
**/
public class S3Config {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKeyArn")
    public String kmsKeyArn;
    public S3Config withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonProperty("Path")
    public String path;
    public S3Config withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public S3Config withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}