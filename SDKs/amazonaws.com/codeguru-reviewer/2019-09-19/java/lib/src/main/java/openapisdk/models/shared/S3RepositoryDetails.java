package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3RepositoryDetails
 *  Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files. 
**/
public class S3RepositoryDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketName")
    public String bucketName;
    public S3RepositoryDetails withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeArtifacts")
    public CodeArtifacts codeArtifacts;
    public S3RepositoryDetails withCodeArtifacts(CodeArtifacts codeArtifacts) {
        this.codeArtifacts = codeArtifacts;
        return this;
    }
}