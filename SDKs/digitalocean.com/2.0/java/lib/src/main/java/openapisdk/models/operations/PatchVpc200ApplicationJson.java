package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchVpc200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc")
    public openapisdk.models.shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems vpc;
    public PatchVpc200ApplicationJson withVpc(openapisdk.models.shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems vpc) {
        this.vpc = vpc;
        return this;
    }
}