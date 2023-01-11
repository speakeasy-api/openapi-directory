package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartStudioSsoConfigurationRepairResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studio")
    public Studio studio;
    public StartStudioSsoConfigurationRepairResponse withStudio(Studio studio) {
        this.studio = studio;
        return this;
    }
}