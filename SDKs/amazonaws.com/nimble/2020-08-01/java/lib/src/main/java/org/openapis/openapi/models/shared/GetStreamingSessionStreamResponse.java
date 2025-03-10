/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetStreamingSessionStreamResponse - Success
 */
public class GetStreamingSessionStreamResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream")
    public StreamingSessionStream stream;

    public GetStreamingSessionStreamResponse withStream(StreamingSessionStream stream) {
        this.stream = stream;
        return this;
    }
    
    public GetStreamingSessionStreamResponse(){}
}
