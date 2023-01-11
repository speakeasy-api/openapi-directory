package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetReturnsReturnsArrayV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetReturnsReturnsArrayV2ReturnV2[] data;
    public GetReturnsReturnsArrayV2 withData(GetReturnsReturnsArrayV2ReturnV2[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetReturnsReturnsArrayV2Meta meta;
    public GetReturnsReturnsArrayV2 withMeta(GetReturnsReturnsArrayV2Meta meta) {
        this.meta = meta;
        return this;
    }
}