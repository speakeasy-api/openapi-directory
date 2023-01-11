package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VehHistoryData {
    @JsonProperty("data")
    public VehHistory[] data;
    public VehHistoryData withData(VehHistory[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("vin")
    public String vin;
    public VehHistoryData withVin(String vin) {
        this.vin = vin;
        return this;
    }
}