package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetByteMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ByteMatchSet")
    public ByteMatchSet byteMatchSet;
    public GetByteMatchSetResponse withByteMatchSet(ByteMatchSet byteMatchSet) {
        this.byteMatchSet = byteMatchSet;
        return this;
    }
}