package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVpc201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc")
    public openapisdk.models.shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems vpc;
    public CreateVpc201ApplicationJson withVpc(openapisdk.models.shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems vpc) {
        this.vpc = vpc;
        return this;
    }
}