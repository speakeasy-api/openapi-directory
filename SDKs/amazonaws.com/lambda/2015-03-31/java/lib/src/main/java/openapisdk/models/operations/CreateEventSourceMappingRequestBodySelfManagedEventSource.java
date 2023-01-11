package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEventSourceMappingRequestBodySelfManagedEventSource
 * The self-managed Apache Kafka cluster for your event source.
**/
public class CreateEventSourceMappingRequestBodySelfManagedEventSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoints")
    public java.util.Map<String, String[]> endpoints;
    public CreateEventSourceMappingRequestBodySelfManagedEventSource withEndpoints(java.util.Map<String, String[]> endpoints) {
        this.endpoints = endpoints;
        return this;
    }
}