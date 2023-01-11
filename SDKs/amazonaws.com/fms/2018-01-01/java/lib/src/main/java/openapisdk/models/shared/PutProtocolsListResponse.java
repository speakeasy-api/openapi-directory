package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutProtocolsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtocolsList")
    public ProtocolsListData protocolsList;
    public PutProtocolsListResponse withProtocolsList(ProtocolsListData protocolsList) {
        this.protocolsList = protocolsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtocolsListArn")
    public String protocolsListArn;
    public PutProtocolsListResponse withProtocolsListArn(String protocolsListArn) {
        this.protocolsListArn = protocolsListArn;
        return this;
    }
}