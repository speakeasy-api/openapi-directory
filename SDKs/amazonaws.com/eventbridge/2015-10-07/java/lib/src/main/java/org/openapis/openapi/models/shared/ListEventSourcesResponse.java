/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListEventSourcesResponse - Success
 */
public class ListEventSourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSources")
    public EventSource[] eventSources;

    public ListEventSourcesResponse withEventSources(EventSource[] eventSources) {
        this.eventSources = eventSources;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListEventSourcesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListEventSourcesResponse(){}
}
