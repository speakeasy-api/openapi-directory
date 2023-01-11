package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RawMessage
 * The raw email message.
**/
public class RawMessage {
    @JsonProperty("Data")
    public String data;
    public RawMessage withData(String data) {
        this.data = data;
        return this;
    }
}