package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPadsOfAuthorUsingPost200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public ListPadsOfAuthorUsingPost200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ListPadsOfAuthorUsingPost200ApplicationJsonData data;
    public ListPadsOfAuthorUsingPost200ApplicationJson withData(ListPadsOfAuthorUsingPost200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ListPadsOfAuthorUsingPost200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}