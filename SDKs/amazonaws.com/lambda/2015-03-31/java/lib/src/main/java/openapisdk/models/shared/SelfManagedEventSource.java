package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SelfManagedEventSource
 * The self-managed Apache Kafka cluster for your event source.
**/
public class SelfManagedEventSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoints")
    public java.util.Map<String, String[]> endpoints;
    public SelfManagedEventSource withEndpoints(java.util.Map<String, String[]> endpoints) {
        this.endpoints = endpoints;
        return this;
    }
}