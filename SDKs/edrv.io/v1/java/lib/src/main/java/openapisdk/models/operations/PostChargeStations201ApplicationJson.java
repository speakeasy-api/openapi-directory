package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostChargeStations201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargestation")
    public java.util.Map<String, Object> chargestation;
    public PostChargeStations201ApplicationJson withChargestation(java.util.Map<String, Object> chargestation) {
        this.chargestation = chargestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PostChargeStations201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ok")
    public Boolean ok;
    public PostChargeStations201ApplicationJson withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}