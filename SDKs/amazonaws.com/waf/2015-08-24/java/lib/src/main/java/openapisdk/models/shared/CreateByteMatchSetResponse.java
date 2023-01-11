package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateByteMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ByteMatchSet")
    public ByteMatchSet byteMatchSet;
    public CreateByteMatchSetResponse withByteMatchSet(ByteMatchSet byteMatchSet) {
        this.byteMatchSet = byteMatchSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateByteMatchSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
}