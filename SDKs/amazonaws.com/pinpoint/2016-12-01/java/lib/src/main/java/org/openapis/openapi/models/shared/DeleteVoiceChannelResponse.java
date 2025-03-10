/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteVoiceChannelResponse - Success
 */
public class DeleteVoiceChannelResponse {
    /**
     * Provides information about the status and settings of the voice channel for an application.
     */
    @JsonProperty("VoiceChannelResponse")
    public VoiceChannelResponse voiceChannelResponse;

    public DeleteVoiceChannelResponse withVoiceChannelResponse(VoiceChannelResponse voiceChannelResponse) {
        this.voiceChannelResponse = voiceChannelResponse;
        return this;
    }
    
    public DeleteVoiceChannelResponse(@JsonProperty("VoiceChannelResponse") VoiceChannelResponse voiceChannelResponse) {
        this.voiceChannelResponse = voiceChannelResponse;
  }
}
