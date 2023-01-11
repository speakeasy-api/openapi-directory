package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPushTemplateResponse {
    @JsonProperty("PushNotificationTemplateResponse")
    public PushNotificationTemplateResponse pushNotificationTemplateResponse;
    public GetPushTemplateResponse withPushNotificationTemplateResponse(PushNotificationTemplateResponse pushNotificationTemplateResponse) {
        this.pushNotificationTemplateResponse = pushNotificationTemplateResponse;
        return this;
    }
}