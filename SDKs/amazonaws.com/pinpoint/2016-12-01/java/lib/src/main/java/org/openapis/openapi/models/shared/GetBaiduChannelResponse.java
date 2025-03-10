/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBaiduChannelResponse - Success
 */
public class GetBaiduChannelResponse {
    /**
     * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
     */
    @JsonProperty("BaiduChannelResponse")
    public BaiduChannelResponse baiduChannelResponse;

    public GetBaiduChannelResponse withBaiduChannelResponse(BaiduChannelResponse baiduChannelResponse) {
        this.baiduChannelResponse = baiduChannelResponse;
        return this;
    }
    
    public GetBaiduChannelResponse(@JsonProperty("BaiduChannelResponse") BaiduChannelResponse baiduChannelResponse) {
        this.baiduChannelResponse = baiduChannelResponse;
  }
}
