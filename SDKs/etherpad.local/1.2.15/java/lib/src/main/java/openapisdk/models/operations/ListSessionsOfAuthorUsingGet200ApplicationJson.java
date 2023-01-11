package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSessionsOfAuthorUsingGet200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public ListSessionsOfAuthorUsingGet200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ListSessionsOfAuthorUsingGet200ApplicationJsonData data;
    public ListSessionsOfAuthorUsingGet200ApplicationJson withData(ListSessionsOfAuthorUsingGet200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ListSessionsOfAuthorUsingGet200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}