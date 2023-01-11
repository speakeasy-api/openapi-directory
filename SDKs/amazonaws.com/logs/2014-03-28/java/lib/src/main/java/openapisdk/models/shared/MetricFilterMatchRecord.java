package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricFilterMatchRecord
 * Represents a matched event.
**/
public class MetricFilterMatchRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventMessage")
    public String eventMessage;
    public MetricFilterMatchRecord withEventMessage(String eventMessage) {
        this.eventMessage = eventMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventNumber")
    public Long eventNumber;
    public MetricFilterMatchRecord withEventNumber(Long eventNumber) {
        this.eventNumber = eventNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractedValues")
    public java.util.Map<String, String> extractedValues;
    public MetricFilterMatchRecord withExtractedValues(java.util.Map<String, String> extractedValues) {
        this.extractedValues = extractedValues;
        return this;
    }
}