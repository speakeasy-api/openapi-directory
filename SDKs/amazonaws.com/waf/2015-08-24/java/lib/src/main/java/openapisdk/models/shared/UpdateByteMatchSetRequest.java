package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateByteMatchSetRequest {
    @JsonProperty("ByteMatchSetId")
    public String byteMatchSetId;
    public UpdateByteMatchSetRequest withByteMatchSetId(String byteMatchSetId) {
        this.byteMatchSetId = byteMatchSetId;
        return this;
    }
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateByteMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("Updates")
    public ByteMatchSetUpdate[] updates;
    public UpdateByteMatchSetRequest withUpdates(ByteMatchSetUpdate[] updates) {
        this.updates = updates;
        return this;
    }
}