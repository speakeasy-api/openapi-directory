package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAdmChannelResponse {
    @JsonProperty("ADMChannelResponse")
    public AdmChannelResponse admChannelResponse;
    public GetAdmChannelResponse withAdmChannelResponse(AdmChannelResponse admChannelResponse) {
        this.admChannelResponse = admChannelResponse;
        return this;
    }
}