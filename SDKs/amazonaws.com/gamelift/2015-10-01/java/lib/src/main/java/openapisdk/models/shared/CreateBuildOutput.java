package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBuildOutput
 * Represents the returned data in response to a request operation.
**/
public class CreateBuildOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Build")
    public Build build;
    public CreateBuildOutput withBuild(Build build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageLocation")
    public S3Location storageLocation;
    public CreateBuildOutput withStorageLocation(S3Location storageLocation) {
        this.storageLocation = storageLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UploadCredentials")
    public AwsCredentials uploadCredentials;
    public CreateBuildOutput withUploadCredentials(AwsCredentials uploadCredentials) {
        this.uploadCredentials = uploadCredentials;
        return this;
    }
}