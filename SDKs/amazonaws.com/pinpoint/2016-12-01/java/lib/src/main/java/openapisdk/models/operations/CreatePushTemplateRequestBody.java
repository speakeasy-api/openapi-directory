package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePushTemplateRequestBody {
    @JsonProperty("PushNotificationTemplateRequest")
    public CreatePushTemplateRequestBodyPushNotificationTemplateRequest pushNotificationTemplateRequest;
    public CreatePushTemplateRequestBody withPushNotificationTemplateRequest(CreatePushTemplateRequestBodyPushNotificationTemplateRequest pushNotificationTemplateRequest) {
        this.pushNotificationTemplateRequest = pushNotificationTemplateRequest;
        return this;
    }
}