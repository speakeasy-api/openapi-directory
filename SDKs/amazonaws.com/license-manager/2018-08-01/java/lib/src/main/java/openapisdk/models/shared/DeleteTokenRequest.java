package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTokenRequest {
    @JsonProperty("TokenId")
    public String tokenId;
    public DeleteTokenRequest withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
}