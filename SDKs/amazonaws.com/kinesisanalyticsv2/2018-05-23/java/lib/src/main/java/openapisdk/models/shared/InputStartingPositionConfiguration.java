package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputStartingPositionConfiguration
 * Describes the point at which the application reads from the streaming source.
**/
public class InputStartingPositionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputStartingPosition")
    public InputStartingPositionEnum inputStartingPosition;
    public InputStartingPositionConfiguration withInputStartingPosition(InputStartingPositionEnum inputStartingPosition) {
        this.inputStartingPosition = inputStartingPosition;
        return this;
    }
}