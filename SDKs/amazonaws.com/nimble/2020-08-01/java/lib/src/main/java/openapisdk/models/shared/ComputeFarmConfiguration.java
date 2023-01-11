package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeFarmConfiguration
 * The configuration for a render farm that is associated with a studio resource.
**/
public class ComputeFarmConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeDirectoryUser")
    public String activeDirectoryUser;
    public ComputeFarmConfiguration withActiveDirectoryUser(String activeDirectoryUser) {
        this.activeDirectoryUser = activeDirectoryUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public ComputeFarmConfiguration withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}