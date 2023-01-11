package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelationalDatabaseEndpoint
 * Describes an endpoint for a database.
**/
public class RelationalDatabaseEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public RelationalDatabaseEndpoint withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public RelationalDatabaseEndpoint withPort(Long port) {
        this.port = port;
        return this;
    }
}