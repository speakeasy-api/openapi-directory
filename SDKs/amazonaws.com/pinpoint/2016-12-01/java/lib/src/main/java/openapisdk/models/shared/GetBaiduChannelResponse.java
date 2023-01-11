package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBaiduChannelResponse {
    @JsonProperty("BaiduChannelResponse")
    public BaiduChannelResponse baiduChannelResponse;
    public GetBaiduChannelResponse withBaiduChannelResponse(BaiduChannelResponse baiduChannelResponse) {
        this.baiduChannelResponse = baiduChannelResponse;
        return this;
    }
}