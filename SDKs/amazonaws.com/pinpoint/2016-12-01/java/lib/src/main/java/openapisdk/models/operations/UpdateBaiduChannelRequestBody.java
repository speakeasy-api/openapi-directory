package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateBaiduChannelRequestBody {
    @JsonProperty("BaiduChannelRequest")
    public UpdateBaiduChannelRequestBodyBaiduChannelRequest baiduChannelRequest;
    public UpdateBaiduChannelRequestBody withBaiduChannelRequest(UpdateBaiduChannelRequestBodyBaiduChannelRequest baiduChannelRequest) {
        this.baiduChannelRequest = baiduChannelRequest;
        return this;
    }
}