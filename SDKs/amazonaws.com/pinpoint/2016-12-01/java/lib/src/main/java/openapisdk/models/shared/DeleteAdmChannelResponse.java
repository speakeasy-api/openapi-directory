package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAdmChannelResponse {
    @JsonProperty("ADMChannelResponse")
    public AdmChannelResponse admChannelResponse;
    public DeleteAdmChannelResponse withAdmChannelResponse(AdmChannelResponse admChannelResponse) {
        this.admChannelResponse = admChannelResponse;
        return this;
    }
}