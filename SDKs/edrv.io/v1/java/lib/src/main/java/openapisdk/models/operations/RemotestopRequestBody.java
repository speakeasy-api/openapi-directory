package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemotestopRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargestation")
    public String chargestation;
    public RemotestopRequestBody withChargestation(String chargestation) {
        this.chargestation = chargestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driver")
    public String driver;
    public RemotestopRequestBody withDriver(String driver) {
        this.driver = driver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction")
    public String transaction;
    public RemotestopRequestBody withTransaction(String transaction) {
        this.transaction = transaction;
        return this;
    }
}