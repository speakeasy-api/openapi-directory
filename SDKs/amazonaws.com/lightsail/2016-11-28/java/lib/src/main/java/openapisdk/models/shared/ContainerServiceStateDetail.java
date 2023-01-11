package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerServiceStateDetail
 * Describes the current state of a container service.
**/
public class ContainerServiceStateDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ContainerServiceStateDetailCodeEnum code;
    public ContainerServiceStateDetail withCode(ContainerServiceStateDetailCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ContainerServiceStateDetail withMessage(String message) {
        this.message = message;
        return this;
    }
}