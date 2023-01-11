package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerValidationOutput
 * Contains output from validating an instance.
**/
public class ServerValidationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public Server server;
    public ServerValidationOutput withServer(Server server) {
        this.server = server;
        return this;
    }
}