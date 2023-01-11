package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAppsListRequest {
    @JsonProperty("ListId")
    public String listId;
    public DeleteAppsListRequest withListId(String listId) {
        this.listId = listId;
        return this;
    }
}