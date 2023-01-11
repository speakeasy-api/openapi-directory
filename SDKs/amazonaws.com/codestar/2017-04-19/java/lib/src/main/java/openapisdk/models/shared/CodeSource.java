package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CodeSource
 * The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.
**/
public class CodeSource {
    @JsonProperty("s3")
    public S3Location s3;
    public CodeSource withS3(S3Location s3) {
        this.s3 = s3;
        return this;
    }
}