package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePipelineNotificationsRequestBodyNotifications
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
public class UpdatePipelineNotificationsRequestBodyNotifications {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Completed")
    public String completed;
    public UpdatePipelineNotificationsRequestBodyNotifications withCompleted(String completed) {
        this.completed = completed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public String error;
    public UpdatePipelineNotificationsRequestBodyNotifications withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Progressing")
    public String progressing;
    public UpdatePipelineNotificationsRequestBodyNotifications withProgressing(String progressing) {
        this.progressing = progressing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warning")
    public String warning;
    public UpdatePipelineNotificationsRequestBodyNotifications withWarning(String warning) {
        this.warning = warning;
        return this;
    }
}