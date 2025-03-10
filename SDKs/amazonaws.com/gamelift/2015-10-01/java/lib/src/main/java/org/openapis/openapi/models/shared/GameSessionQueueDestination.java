/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GameSessionQueueDestination - A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations. 
 */
public class GameSessionQueueDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationArn")
    public String destinationArn;

    public GameSessionQueueDestination withDestinationArn(String destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    
    public GameSessionQueueDestination(){}
}
