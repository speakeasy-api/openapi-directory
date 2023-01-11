package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceActionDetail
 * An object containing detailed information about the self-service action.
**/
public class ServiceActionDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Definition")
    public java.util.Map<String, String> definition;
    public ServiceActionDetail withDefinition(java.util.Map<String, String> definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceActionSummary")
    public ServiceActionSummary serviceActionSummary;
    public ServiceActionDetail withServiceActionSummary(ServiceActionSummary serviceActionSummary) {
        this.serviceActionSummary = serviceActionSummary;
        return this;
    }
}