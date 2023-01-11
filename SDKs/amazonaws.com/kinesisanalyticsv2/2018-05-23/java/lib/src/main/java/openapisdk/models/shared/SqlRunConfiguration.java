package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SqlRunConfiguration
 * Describes the starting parameters for a SQL-based Kinesis Data Analytics application.
**/
public class SqlRunConfiguration {
    @JsonProperty("InputId")
    public String inputId;
    public SqlRunConfiguration withInputId(String inputId) {
        this.inputId = inputId;
        return this;
    }
    @JsonProperty("InputStartingPositionConfiguration")
    public InputStartingPositionConfiguration inputStartingPositionConfiguration;
    public SqlRunConfiguration withInputStartingPositionConfiguration(InputStartingPositionConfiguration inputStartingPositionConfiguration) {
        this.inputStartingPositionConfiguration = inputStartingPositionConfiguration;
        return this;
    }
}