package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventBridgeDestinationProperties
 *  The properties that are applied when Amazon EventBridge is being used as a destination. 
**/
public class EventBridgeDestinationProperties {
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
}