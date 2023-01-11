package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageStateChangeReason
 * Describes the reason why the last image state change occurred.
**/
public class ImageStateChangeReason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public ImageStateChangeReasonCodeEnum code;
    public ImageStateChangeReason withCode(ImageStateChangeReasonCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ImageStateChangeReason withMessage(String message) {
        this.message = message;
        return this;
    }
}