package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteRequest
 * A container for a Delete BatchWrite request
**/
public class DeleteRequest {
    @JsonProperty("Key")
    public Key key;
    public DeleteRequest withKey(Key key) {
        this.key = key;
        return this;
    }
}