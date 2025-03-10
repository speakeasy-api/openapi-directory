/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateShareUploadChannelResponse - Upload channel information
 */
public class CreateShareUploadChannelResponse {
    /**
     * Upload (channel) ID
     */
    @JsonProperty("uploadId")
    public String uploadId;
    public CreateShareUploadChannelResponse withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
    
    /**
     * (public) Upload URL
     */
    @JsonProperty("uploadUrl")
    public String uploadUrl;
    public CreateShareUploadChannelResponse withUploadUrl(String uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    }
    
}
