package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEventIntegrationRequestBodyEventFilter
 * The event filter.
**/
public class CreateEventIntegrationRequestBodyEventFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Source")
    public String source;
    public CreateEventIntegrationRequestBodyEventFilter withSource(String source) {
        this.source = source;
        return this;
    }
}