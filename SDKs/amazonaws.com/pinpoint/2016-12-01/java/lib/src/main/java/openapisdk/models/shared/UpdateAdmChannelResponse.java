package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAdmChannelResponse {
    @JsonProperty("ADMChannelResponse")
    public AdmChannelResponse admChannelResponse;
    public UpdateAdmChannelResponse withAdmChannelResponse(AdmChannelResponse admChannelResponse) {
        this.admChannelResponse = admChannelResponse;
        return this;
    }
}