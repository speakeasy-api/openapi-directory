package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEventConfigurationsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventConfigurations")
    public java.util.Map<String, openapisdk.models.shared.Configuration> eventConfigurations;
    public UpdateEventConfigurationsRequestBody withEventConfigurations(java.util.Map<String, openapisdk.models.shared.Configuration> eventConfigurations) {
        this.eventConfigurations = eventConfigurations;
        return this;
    }
}