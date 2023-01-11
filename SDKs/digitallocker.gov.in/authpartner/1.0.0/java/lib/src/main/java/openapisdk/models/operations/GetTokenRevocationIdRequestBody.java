package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTokenRevocationIdRequestBody {
    @JsonProperty("token")
    public String token;
    public GetTokenRevocationIdRequestBody withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_type_hint")
    public GetTokenRevocationIdRequestBodyTokenTypeHintEnum tokenTypeHint;
    public GetTokenRevocationIdRequestBody withTokenTypeHint(GetTokenRevocationIdRequestBodyTokenTypeHintEnum tokenTypeHint) {
        this.tokenTypeHint = tokenTypeHint;
        return this;
    }
}