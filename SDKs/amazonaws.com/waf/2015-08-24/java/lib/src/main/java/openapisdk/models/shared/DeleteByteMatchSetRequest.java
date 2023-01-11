package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteByteMatchSetRequest {
    @JsonProperty("ByteMatchSetId")
    public String byteMatchSetId;
    public DeleteByteMatchSetRequest withByteMatchSetId(String byteMatchSetId) {
        this.byteMatchSetId = byteMatchSetId;
        return this;
    }
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteByteMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
}