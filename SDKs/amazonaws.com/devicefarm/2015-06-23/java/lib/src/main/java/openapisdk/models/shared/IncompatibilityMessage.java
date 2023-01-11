package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncompatibilityMessage
 * Represents information about incompatibility.
**/
public class IncompatibilityMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public IncompatibilityMessage withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DeviceAttributeEnum type;
    public IncompatibilityMessage withType(DeviceAttributeEnum type) {
        this.type = type;
        return this;
    }
}