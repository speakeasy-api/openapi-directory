package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StatusCall {
    @JsonProperty("data")
    public GetStatus data;
    public StatusCall withData(GetStatus data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public VerifyNameMeta meta;
    public StatusCall withMeta(VerifyNameMeta meta) {
        this.meta = meta;
        return this;
    }
}