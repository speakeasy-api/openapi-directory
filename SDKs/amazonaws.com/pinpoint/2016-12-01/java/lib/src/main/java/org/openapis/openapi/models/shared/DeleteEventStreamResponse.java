/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteEventStreamResponse - Success
 */
public class DeleteEventStreamResponse {
    /**
     * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
     */
    @JsonProperty("EventStream")
    public EventStream eventStream;

    public DeleteEventStreamResponse withEventStream(EventStream eventStream) {
        this.eventStream = eventStream;
        return this;
    }
    
    public DeleteEventStreamResponse(@JsonProperty("EventStream") EventStream eventStream) {
        this.eventStream = eventStream;
  }
}
