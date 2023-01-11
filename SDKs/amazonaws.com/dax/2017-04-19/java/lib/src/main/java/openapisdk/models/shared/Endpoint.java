package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Endpoint
 * Represents the information required for client programs to connect to the endpoint for a DAX cluster.
**/
public class Endpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public String address;
    public Endpoint withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public Endpoint withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("URL")
    public String url;
    public Endpoint withUrl(String url) {
        this.url = url;
        return this;
    }
}