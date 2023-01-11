package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageBuilderStateChangeReason
 * Describes the reason why the last image builder state change occurred.
**/
public class ImageBuilderStateChangeReason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public ImageBuilderStateChangeReasonCodeEnum code;
    public ImageBuilderStateChangeReason withCode(ImageBuilderStateChangeReasonCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ImageBuilderStateChangeReason withMessage(String message) {
        this.message = message;
        return this;
    }
}