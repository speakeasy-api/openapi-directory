package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutProtocolsListRequest {
    @JsonProperty("ProtocolsList")
    public ProtocolsListData protocolsList;
    public PutProtocolsListRequest withProtocolsList(ProtocolsListData protocolsList) {
        this.protocolsList = protocolsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagList")
    public Tag[] tagList;
    public PutProtocolsListRequest withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}