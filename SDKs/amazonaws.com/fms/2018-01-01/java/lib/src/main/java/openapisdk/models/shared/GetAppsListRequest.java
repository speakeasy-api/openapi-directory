package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAppsListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultList")
    public Boolean defaultList;
    public GetAppsListRequest withDefaultList(Boolean defaultList) {
        this.defaultList = defaultList;
        return this;
    }
    @JsonProperty("ListId")
    public String listId;
    public GetAppsListRequest withListId(String listId) {
        this.listId = listId;
        return this;
    }
}