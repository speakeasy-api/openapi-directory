package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRepositoryTriggersOutput
 * Represents the output of a get repository triggers operation.
**/
public class GetRepositoryTriggersOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationId")
    public String configurationId;
    public GetRepositoryTriggersOutput withConfigurationId(String configurationId) {
        this.configurationId = configurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggers")
    public RepositoryTrigger[] triggers;
    public GetRepositoryTriggersOutput withTriggers(RepositoryTrigger[] triggers) {
        this.triggers = triggers;
        return this;
    }
}