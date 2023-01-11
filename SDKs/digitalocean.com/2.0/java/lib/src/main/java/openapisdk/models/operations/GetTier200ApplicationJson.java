package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTier200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public openapisdk.models.shared.Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems tier;
    public GetTier200ApplicationJson withTier(openapisdk.models.shared.Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems tier) {
        this.tier = tier;
        return this;
    }
}