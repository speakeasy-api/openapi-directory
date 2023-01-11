package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackendDefaults
 * An object that represents the default properties for a backend.
**/
public class BackendDefaults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientPolicy")
    public ClientPolicy clientPolicy;
    public BackendDefaults withClientPolicy(ClientPolicy clientPolicy) {
        this.clientPolicy = clientPolicy;
        return this;
    }
}