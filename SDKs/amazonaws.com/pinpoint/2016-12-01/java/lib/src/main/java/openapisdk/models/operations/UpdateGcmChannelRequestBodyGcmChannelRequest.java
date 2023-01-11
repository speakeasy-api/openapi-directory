package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGcmChannelRequestBodyGcmChannelRequest
 * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
**/
public class UpdateGcmChannelRequestBodyGcmChannelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiKey")
    public String apiKey;
    public UpdateGcmChannelRequestBodyGcmChannelRequest withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UpdateGcmChannelRequestBodyGcmChannelRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}