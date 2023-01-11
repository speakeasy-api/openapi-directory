package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstanceSize200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_size")
    public openapisdk.models.shared.Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems instanceSize;
    public GetInstanceSize200ApplicationJson withInstanceSize(openapisdk.models.shared.Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems instanceSize) {
        this.instanceSize = instanceSize;
        return this;
    }
}