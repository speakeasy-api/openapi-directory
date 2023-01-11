package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnexpectedErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public Object detail;
    public UnexpectedErrorResponse withDetail(Object detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public UnexpectedErrorResponse withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public UnexpectedErrorResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref")
    public String ref;
    public UnexpectedErrorResponse withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_code")
    public Double statusCode;
    public UnexpectedErrorResponse withStatusCode(Double statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type_name")
    public String typeName;
    public UnexpectedErrorResponse withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}