package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscoveredResource
 * Object representing the on-premises resource being migrated.
**/
public class DiscoveredResource {
    @JsonProperty("ConfigurationId")
    public String configurationId;
    public DiscoveredResource withConfigurationId(String configurationId) {
        this.configurationId = configurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public DiscoveredResource withDescription(String description) {
        this.description = description;
        return this;
    }
}