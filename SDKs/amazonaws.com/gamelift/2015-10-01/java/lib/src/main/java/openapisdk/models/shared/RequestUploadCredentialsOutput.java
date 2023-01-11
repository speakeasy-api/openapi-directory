package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestUploadCredentialsOutput
 * Represents the returned data in response to a request operation.
**/
public class RequestUploadCredentialsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageLocation")
    public S3Location storageLocation;
    public RequestUploadCredentialsOutput withStorageLocation(S3Location storageLocation) {
        this.storageLocation = storageLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UploadCredentials")
    public AwsCredentials uploadCredentials;
    public RequestUploadCredentialsOutput withUploadCredentials(AwsCredentials uploadCredentials) {
        this.uploadCredentials = uploadCredentials;
        return this;
    }
}