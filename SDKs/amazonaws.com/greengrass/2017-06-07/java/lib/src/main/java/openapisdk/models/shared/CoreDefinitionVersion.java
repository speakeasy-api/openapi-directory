package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CoreDefinitionVersion
 * Information about a core definition version.
**/
public class CoreDefinitionVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cores")
    public Core[] cores;
    public CoreDefinitionVersion withCores(Core[] cores) {
        this.cores = cores;
        return this;
    }
}