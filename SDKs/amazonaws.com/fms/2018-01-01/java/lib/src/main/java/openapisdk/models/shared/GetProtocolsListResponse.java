package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProtocolsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtocolsList")
    public ProtocolsListData protocolsList;
    public GetProtocolsListResponse withProtocolsList(ProtocolsListData protocolsList) {
        this.protocolsList = protocolsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtocolsListArn")
    public String protocolsListArn;
    public GetProtocolsListResponse withProtocolsListArn(String protocolsListArn) {
        this.protocolsListArn = protocolsListArn;
        return this;
    }
}