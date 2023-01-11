package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetIceServerConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IceServerList")
    public IceServer[] iceServerList;
    public GetIceServerConfigResponse withIceServerList(IceServer[] iceServerList) {
        this.iceServerList = iceServerList;
        return this;
    }
}