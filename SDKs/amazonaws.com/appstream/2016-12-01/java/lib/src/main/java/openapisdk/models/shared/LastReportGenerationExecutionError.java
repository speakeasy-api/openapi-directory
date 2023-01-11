package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LastReportGenerationExecutionError
 * Describes the error that is returned when a usage report can't be generated.
**/
public class LastReportGenerationExecutionError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public UsageReportExecutionErrorCodeEnum errorCode;
    public LastReportGenerationExecutionError withErrorCode(UsageReportExecutionErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public LastReportGenerationExecutionError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}