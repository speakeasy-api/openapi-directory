package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FlatErrorResponse
 * An API Error response
**/
public class FlatErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public FlatErrorResponse withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FlatErrorResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public FlatErrorResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("param")
    public String param;
    public FlatErrorResponse withParam(String param) {
        this.param = param;
        return this;
    }
}