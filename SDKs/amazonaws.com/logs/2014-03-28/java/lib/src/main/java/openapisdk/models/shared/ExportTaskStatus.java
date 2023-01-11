package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportTaskStatus
 * Represents the status of an export task.
**/
public class ExportTaskStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ExportTaskStatusCodeEnum code;
    public ExportTaskStatus withCode(ExportTaskStatusCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ExportTaskStatus withMessage(String message) {
        this.message = message;
        return this;
    }
}