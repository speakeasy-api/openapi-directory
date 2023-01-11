package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSimulationJobRequestBodyLoggingConfig
 * The logging configuration.
**/
public class CreateSimulationJobRequestBodyLoggingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordAllRosTopics")
    public Boolean recordAllRosTopics;
    public CreateSimulationJobRequestBodyLoggingConfig withRecordAllRosTopics(Boolean recordAllRosTopics) {
        this.recordAllRosTopics = recordAllRosTopics;
        return this;
    }
}