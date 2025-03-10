/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisStreamsInput -  Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
 */
public class KinesisStreamsInput {
    @JsonProperty("ResourceARN")
    public String resourceARN;

    public KinesisStreamsInput withResourceARN(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    
    public KinesisStreamsInput(@JsonProperty("ResourceARN") String resourceARN) {
        this.resourceARN = resourceARN;
  }
}
