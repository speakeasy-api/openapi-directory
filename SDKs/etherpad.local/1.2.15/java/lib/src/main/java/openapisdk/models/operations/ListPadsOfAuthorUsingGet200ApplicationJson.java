package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPadsOfAuthorUsingGet200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public ListPadsOfAuthorUsingGet200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ListPadsOfAuthorUsingGet200ApplicationJsonData data;
    public ListPadsOfAuthorUsingGet200ApplicationJson withData(ListPadsOfAuthorUsingGet200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ListPadsOfAuthorUsingGet200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}