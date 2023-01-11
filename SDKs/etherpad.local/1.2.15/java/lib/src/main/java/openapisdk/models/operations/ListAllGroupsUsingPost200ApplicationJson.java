package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllGroupsUsingPost200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public ListAllGroupsUsingPost200ApplicationJson withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ListAllGroupsUsingPost200ApplicationJsonData data;
    public ListAllGroupsUsingPost200ApplicationJson withData(ListAllGroupsUsingPost200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ListAllGroupsUsingPost200ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}