package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteDevicePoolRequest
 * Represents a request to the delete device pool operation.
**/
public class DeleteDevicePoolRequest {
    @JsonProperty("arn")
    public String arn;
    public DeleteDevicePoolRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}