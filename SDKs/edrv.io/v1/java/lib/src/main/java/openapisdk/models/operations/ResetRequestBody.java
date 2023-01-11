package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargestation")
    public String chargestation;
    public ResetRequestBody withChargestation(String chargestation) {
        this.chargestation = chargestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ResetRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}