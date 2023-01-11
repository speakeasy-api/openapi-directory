package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Token")
    public String token;
    public CreateTokenResponse withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenId")
    public String tokenId;
    public CreateTokenResponse withTokenId(String tokenId) {
        this.tokenId = tokenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenType")
    public TokenTypeEnum tokenType;
    public CreateTokenResponse withTokenType(TokenTypeEnum tokenType) {
        this.tokenType = tokenType;
        return this;
    }
}