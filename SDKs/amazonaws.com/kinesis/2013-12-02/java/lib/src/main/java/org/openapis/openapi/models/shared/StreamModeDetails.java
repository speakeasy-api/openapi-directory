/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StreamModeDetails -  Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an &lt;b&gt;on-demand&lt;/b&gt; capacity mode and a &lt;b&gt;provisioned&lt;/b&gt; capacity mode for your data streams. 
 */
public class StreamModeDetails {
    @JsonProperty("StreamMode")
    public StreamModeEnum streamMode;

    public StreamModeDetails withStreamMode(StreamModeEnum streamMode) {
        this.streamMode = streamMode;
        return this;
    }
    
    public StreamModeDetails(@JsonProperty("StreamMode") StreamModeEnum streamMode) {
        this.streamMode = streamMode;
  }
}
