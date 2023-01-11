package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApplicationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationId")
    public String configurationId;
    public CreateApplicationResponse withConfigurationId(String configurationId) {
        this.configurationId = configurationId;
        return this;
    }
}