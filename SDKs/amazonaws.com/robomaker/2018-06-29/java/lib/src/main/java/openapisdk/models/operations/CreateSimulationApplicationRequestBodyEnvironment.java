package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSimulationApplicationRequestBodyEnvironment
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
public class CreateSimulationApplicationRequestBodyEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public CreateSimulationApplicationRequestBodyEnvironment withUri(String uri) {
        this.uri = uri;
        return this;
    }
}