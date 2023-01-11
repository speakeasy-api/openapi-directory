package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VerifyPhone {
    @JsonProperty("data")
    public PlaceCall data;
    public VerifyPhone withData(PlaceCall data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public VerifyNameMeta meta;
    public VerifyPhone withMeta(VerifyNameMeta meta) {
        this.meta = meta;
        return this;
    }
}