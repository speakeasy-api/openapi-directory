package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Websocket
 * The websocket for the participant's connection.
**/
public class Websocket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionExpiry")
    public String connectionExpiry;
    public Websocket withConnectionExpiry(String connectionExpiry) {
        this.connectionExpiry = connectionExpiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public Websocket withUrl(String url) {
        this.url = url;
        return this;
    }
}