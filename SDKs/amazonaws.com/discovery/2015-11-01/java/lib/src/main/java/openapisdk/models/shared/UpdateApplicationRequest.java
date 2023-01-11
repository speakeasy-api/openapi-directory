package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApplicationRequest {
    @JsonProperty("configurationId")
    public String configurationId;
    public UpdateApplicationRequest withConfigurationId(String configurationId) {
        this.configurationId = configurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateApplicationRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateApplicationRequest withName(String name) {
        this.name = name;
        return this;
    }
}