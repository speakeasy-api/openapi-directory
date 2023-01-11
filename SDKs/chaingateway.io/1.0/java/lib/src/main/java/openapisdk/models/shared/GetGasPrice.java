package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGasPrice {
    @JsonProperty("gasprice")
    public Integer gasprice;
    public GetGasPrice withGasprice(Integer gasprice) {
        this.gasprice = gasprice;
        return this;
    }
    @JsonProperty("ok")
    public Boolean ok;
    public GetGasPrice withOk(Boolean ok) {
        this.ok = ok;
        return this;
    }
}