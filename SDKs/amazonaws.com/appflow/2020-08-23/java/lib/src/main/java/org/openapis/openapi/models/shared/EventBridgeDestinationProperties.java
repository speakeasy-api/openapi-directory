/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EventBridgeDestinationProperties -  The properties that are applied when Amazon EventBridge is being used as a destination. 
 */
public class EventBridgeDestinationProperties {
    /**
     *  The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. &lt;code&gt;ErrorHandlingConfig&lt;/code&gt; is a part of the destination connector details. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorHandlingConfig")
    public ErrorHandlingConfig errorHandlingConfig;

    public EventBridgeDestinationProperties withErrorHandlingConfig(ErrorHandlingConfig errorHandlingConfig) {
        this.errorHandlingConfig = errorHandlingConfig;
        return this;
    }
    
    @JsonProperty("object")
    public String object;

    public EventBridgeDestinationProperties withObject(String object) {
        this.object = object;
        return this;
    }
    
    public EventBridgeDestinationProperties(@JsonProperty("object") String object) {
        this.object = object;
  }
}
