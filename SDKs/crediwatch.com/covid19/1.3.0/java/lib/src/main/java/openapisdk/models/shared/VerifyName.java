package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VerifyName {
    @JsonProperty("data")
    public VerifyNameData[] data;
    public VerifyName withData(VerifyNameData[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public VerifyNameMeta meta;
    public VerifyName withMeta(VerifyNameMeta meta) {
        this.meta = meta;
        return this;
    }
}