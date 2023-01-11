package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePushTemplateRequestBody {
    @JsonProperty("PushNotificationTemplateRequest")
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest pushNotificationTemplateRequest;
    public UpdatePushTemplateRequestBody withPushNotificationTemplateRequest(UpdatePushTemplateRequestBodyPushNotificationTemplateRequest pushNotificationTemplateRequest) {
        this.pushNotificationTemplateRequest = pushNotificationTemplateRequest;
        return this;
    }
}