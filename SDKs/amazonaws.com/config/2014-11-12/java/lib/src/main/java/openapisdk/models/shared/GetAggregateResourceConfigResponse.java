package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAggregateResourceConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationItem")
    public ConfigurationItem configurationItem;
    public GetAggregateResourceConfigResponse withConfigurationItem(ConfigurationItem configurationItem) {
        this.configurationItem = configurationItem;
        return this;
    }
}