package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OptionsProxy401ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public OptionsProxy401ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public OptionsProxy401ApplicationJson withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public OptionsProxy401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref")
    public String ref;
    public OptionsProxy401ApplicationJson withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_code")
    public Double statusCode;
    public OptionsProxy401ApplicationJson withStatusCode(Double statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type_name")
    public String typeName;
    public OptionsProxy401ApplicationJson withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}