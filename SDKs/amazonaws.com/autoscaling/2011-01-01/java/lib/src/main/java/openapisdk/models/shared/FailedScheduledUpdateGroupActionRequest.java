package openapisdk.models.shared;



/**
 * FailedScheduledUpdateGroupActionRequest
 * Describes a scheduled action that could not be created, updated, or deleted.
**/
public class FailedScheduledUpdateGroupActionRequest {
    public String errorCode;
    public FailedScheduledUpdateGroupActionRequest withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    public String errorMessage;
    public FailedScheduledUpdateGroupActionRequest withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public String scheduledActionName;
    public FailedScheduledUpdateGroupActionRequest withScheduledActionName(String scheduledActionName) {
        this.scheduledActionName = scheduledActionName;
        return this;
    }
}