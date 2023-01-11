package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateWebAclMigrationStackResponse {
    @JsonProperty("S3ObjectUrl")
    public String s3ObjectUrl;
    public CreateWebAclMigrationStackResponse withS3ObjectUrl(String s3ObjectUrl) {
        this.s3ObjectUrl = s3ObjectUrl;
        return this;
    }
}