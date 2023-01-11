package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAdmChannelRequestBody {
    @JsonProperty("ADMChannelRequest")
    public UpdateAdmChannelRequestBodyAdmChannelRequest admChannelRequest;
    public UpdateAdmChannelRequestBody withAdmChannelRequest(UpdateAdmChannelRequestBodyAdmChannelRequest admChannelRequest) {
        this.admChannelRequest = admChannelRequest;
        return this;
    }
}