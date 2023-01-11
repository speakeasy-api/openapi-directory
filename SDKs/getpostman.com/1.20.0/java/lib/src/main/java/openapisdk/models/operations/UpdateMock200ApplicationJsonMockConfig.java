package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMock200ApplicationJsonMockConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public Object[] headers;
    public UpdateMock200ApplicationJsonMockConfig withHeaders(Object[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchBody")
    public Boolean matchBody;
    public UpdateMock200ApplicationJsonMockConfig withMatchBody(Boolean matchBody) {
        this.matchBody = matchBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchQueryParams")
    public Boolean matchQueryParams;
    public UpdateMock200ApplicationJsonMockConfig withMatchQueryParams(Boolean matchQueryParams) {
        this.matchQueryParams = matchQueryParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchWildcards")
    public Boolean matchWildcards;
    public UpdateMock200ApplicationJsonMockConfig withMatchWildcards(Boolean matchWildcards) {
        this.matchWildcards = matchWildcards;
        return this;
    }
}