package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ServiceMetadata
 * A container object for the session details associated with a workflow.
**/
public class ServiceMetadata {
    @JsonProperty("UserDetails")
    public UserDetails userDetails;
    public ServiceMetadata withUserDetails(UserDetails userDetails) {
        this.userDetails = userDetails;
        return this;
    }
}