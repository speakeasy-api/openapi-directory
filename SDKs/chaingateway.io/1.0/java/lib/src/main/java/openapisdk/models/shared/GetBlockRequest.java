package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBlockRequest {
    @JsonProperty("block")
    public String block;
    public GetBlockRequest withBlock(String block) {
        this.block = block;
        return this;
    }
}