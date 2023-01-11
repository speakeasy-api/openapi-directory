package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAppRequestBody {
    @JsonProperty("spec")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec;
    public UpdateAppRequestBody withSpec(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec) {
        this.spec = spec;
        return this;
    }
}