package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HoneycodeDestinationProperties
 *  The properties that are applied when Amazon Honeycode is used as a destination. 
**/
public class HoneycodeDestinationProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorHandlingConfig")
    public ErrorHandlingConfig errorHandlingConfig;
    public HoneycodeDestinationProperties withErrorHandlingConfig(ErrorHandlingConfig errorHandlingConfig) {
        this.errorHandlingConfig = errorHandlingConfig;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public HoneycodeDestinationProperties withObject(String object) {
        this.object = object;
        return this;
    }
}