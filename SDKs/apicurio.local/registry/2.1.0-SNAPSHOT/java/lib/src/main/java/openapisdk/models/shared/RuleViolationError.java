package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuleViolationError
 * All error responses, whether `4xx` or `5xx` will include one of these as the response
 * body.
**/
public class RuleViolationError {
    @JsonProperty("causes")
    public RuleViolationCause[] causes;
    public RuleViolationError withCauses(RuleViolationCause[] causes) {
        this.causes = causes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public RuleViolationError withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public Integer errorCode;
    public RuleViolationError withErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public RuleViolationError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RuleViolationError withName(String name) {
        this.name = name;
        return this;
    }
}