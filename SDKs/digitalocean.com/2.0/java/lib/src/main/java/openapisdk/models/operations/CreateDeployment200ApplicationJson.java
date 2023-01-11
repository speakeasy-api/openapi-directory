package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeployment200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems deployment;
    public CreateDeployment200ApplicationJson withDeployment(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems deployment) {
        this.deployment = deployment;
        return this;
    }
}