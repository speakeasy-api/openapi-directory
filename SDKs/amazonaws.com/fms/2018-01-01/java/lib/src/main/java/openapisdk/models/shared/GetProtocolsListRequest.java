package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProtocolsListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultList")
    public Boolean defaultList;
    public GetProtocolsListRequest withDefaultList(Boolean defaultList) {
        this.defaultList = defaultList;
        return this;
    }
    @JsonProperty("ListId")
    public String listId;
    public GetProtocolsListRequest withListId(String listId) {
        this.listId = listId;
        return this;
    }
}