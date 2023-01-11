package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckOperationRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CheckOperationRead withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("status")
    public CheckOperationReadStatusEnum status;
    public CheckOperationRead withStatus(CheckOperationReadStatusEnum status) {
        this.status = status;
        return this;
    }
}