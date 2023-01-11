package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteGameSessionQueueInput
 * Represents the input for a request operation. 
**/
public class DeleteGameSessionQueueInput {
    @JsonProperty("Name")
    public String name;
    public DeleteGameSessionQueueInput withName(String name) {
        this.name = name;
        return this;
    }
}