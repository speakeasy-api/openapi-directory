package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateBaiduChannelResponse {
    @JsonProperty("BaiduChannelResponse")
    public BaiduChannelResponse baiduChannelResponse;
    public UpdateBaiduChannelResponse withBaiduChannelResponse(BaiduChannelResponse baiduChannelResponse) {
        this.baiduChannelResponse = baiduChannelResponse;
        return this;
    }
}