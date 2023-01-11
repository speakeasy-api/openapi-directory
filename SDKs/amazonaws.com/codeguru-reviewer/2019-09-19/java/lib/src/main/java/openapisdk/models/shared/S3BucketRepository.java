package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3BucketRepository
 *  Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files. 
**/
public class S3BucketRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Details")
    public S3RepositoryDetails details;
    public S3BucketRepository withDetails(S3RepositoryDetails details) {
        this.details = details;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public S3BucketRepository withName(String name) {
        this.name = name;
        return this;
    }
}