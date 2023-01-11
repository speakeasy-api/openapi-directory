package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCoreDefinitionRequestBodyInitialVersion
 * Information about a core definition version.
**/
public class CreateCoreDefinitionRequestBodyInitialVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cores")
    public openapisdk.models.shared.Core[] cores;
    public CreateCoreDefinitionRequestBodyInitialVersion withCores(openapisdk.models.shared.Core[] cores) {
        this.cores = cores;
        return this;
    }
}