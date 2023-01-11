package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCoreDefinitionVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cores")
    public openapisdk.models.shared.Core[] cores;
    public CreateCoreDefinitionVersionRequestBody withCores(openapisdk.models.shared.Core[] cores) {
        this.cores = cores;
        return this;
    }
}