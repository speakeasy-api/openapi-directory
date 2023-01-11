package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoggingConfiguration
 * The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
**/
public class LoggingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public LogDestination[] destinations;
    public LoggingConfiguration withDestinations(LogDestination[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeExecutionData")
    public Boolean includeExecutionData;
    public LoggingConfiguration withIncludeExecutionData(Boolean includeExecutionData) {
        this.includeExecutionData = includeExecutionData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public LogLevelEnum level;
    public LoggingConfiguration withLevel(LogLevelEnum level) {
        this.level = level;
        return this;
    }
}