package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessingConfiguration
 * Describes a data processing configuration.
**/
public class ProcessingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public ProcessingConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Processors")
    public Processor[] processors;
    public ProcessingConfiguration withProcessors(Processor[] processors) {
        this.processors = processors;
        return this;
    }
}