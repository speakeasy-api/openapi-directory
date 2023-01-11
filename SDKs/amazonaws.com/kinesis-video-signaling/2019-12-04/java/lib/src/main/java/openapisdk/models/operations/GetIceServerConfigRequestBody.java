package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetIceServerConfigRequestBody {
    @JsonProperty("ChannelARN")
    public String channelARN;
    public GetIceServerConfigRequestBody withChannelArn(String channelARN) {
        this.channelARN = channelARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public String clientId;
    public GetIceServerConfigRequestBody withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Service")
    public GetIceServerConfigRequestBodyServiceEnum service;
    public GetIceServerConfigRequestBody withService(GetIceServerConfigRequestBodyServiceEnum service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public GetIceServerConfigRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}