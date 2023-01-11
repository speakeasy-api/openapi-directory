package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutRepositoryTriggersOutput
 * Represents the output of a put repository triggers operation.
**/
public class PutRepositoryTriggersOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationId")
    public String configurationId;
    public PutRepositoryTriggersOutput withConfigurationId(String configurationId) {
        this.configurationId = configurationId;
        return this;
    }
}