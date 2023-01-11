package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteBaiduChannelResponse {
    @JsonProperty("BaiduChannelResponse")
    public BaiduChannelResponse baiduChannelResponse;
    public DeleteBaiduChannelResponse withBaiduChannelResponse(BaiduChannelResponse baiduChannelResponse) {
        this.baiduChannelResponse = baiduChannelResponse;
        return this;
    }
}