package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProtocolsListRequest {
    @JsonProperty("ListId")
    public String listId;
    public DeleteProtocolsListRequest withListId(String listId) {
        this.listId = listId;
        return this;
    }
}