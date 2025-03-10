/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StreamSpecification - Represents the DynamoDB Streams configuration for a table in DynamoDB.
 */
public class StreamSpecification {
    @JsonProperty("StreamEnabled")
    public Boolean streamEnabled;

    public StreamSpecification withStreamEnabled(Boolean streamEnabled) {
        this.streamEnabled = streamEnabled;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamViewType")
    public StreamViewTypeEnum streamViewType;

    public StreamSpecification withStreamViewType(StreamViewTypeEnum streamViewType) {
        this.streamViewType = streamViewType;
        return this;
    }
    
    public StreamSpecification(@JsonProperty("StreamEnabled") Boolean streamEnabled) {
        this.streamEnabled = streamEnabled;
  }
}
