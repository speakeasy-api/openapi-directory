package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnlockconnectorRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargestation")
    public String chargestation;
    public UnlockconnectorRequestBody withChargestation(String chargestation) {
        this.chargestation = chargestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connector")
    public String connector;
    public UnlockconnectorRequestBody withConnector(String connector) {
        this.connector = connector;
        return this;
    }
}