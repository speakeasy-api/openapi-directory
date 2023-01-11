package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetByteMatchSetRequest {
    @JsonProperty("ByteMatchSetId")
    public String byteMatchSetId;
    public GetByteMatchSetRequest withByteMatchSetId(String byteMatchSetId) {
        this.byteMatchSetId = byteMatchSetId;
        return this;
    }
}