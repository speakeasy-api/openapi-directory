/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CallRecordingList - ~
 */
public class CallRecordingList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CallRecording[] items;

    public CallRecordingList withItems(CallRecording[] items) {
        this.items = items;
        return this;
    }
    
    public CallRecordingList(){}
}
