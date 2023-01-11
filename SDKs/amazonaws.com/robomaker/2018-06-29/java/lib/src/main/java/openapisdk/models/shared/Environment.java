package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Environment
 * The object that contains the Docker image URI for either your robot or simulation applications.
**/
public class Environment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Environment withUri(String uri) {
        this.uri = uri;
        return this;
    }
}