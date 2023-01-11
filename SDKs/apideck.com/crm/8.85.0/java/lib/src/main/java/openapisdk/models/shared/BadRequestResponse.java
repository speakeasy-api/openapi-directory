package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BadRequestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public Object detail;
    public BadRequestResponse withDetail(Object detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public BadRequestResponse withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public BadRequestResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref")
    public String ref;
    public BadRequestResponse withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_code")
    public Double statusCode;
    public BadRequestResponse withStatusCode(Double statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type_name")
    public String typeName;
    public BadRequestResponse withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}