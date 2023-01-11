package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputConfiguration
 * When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.
**/
public class InputConfiguration {
    @JsonProperty("Id")
    public String id;
    public InputConfiguration withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("InputStartingPositionConfiguration")
    public InputStartingPositionConfiguration inputStartingPositionConfiguration;
    public InputConfiguration withInputStartingPositionConfiguration(InputStartingPositionConfiguration inputStartingPositionConfiguration) {
        this.inputStartingPositionConfiguration = inputStartingPositionConfiguration;
        return this;
    }
}