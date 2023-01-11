package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAdmChannelRequestBodyAdmChannelRequest
 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
**/
public class UpdateAdmChannelRequestBodyAdmChannelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public String clientId;
    public UpdateAdmChannelRequestBodyAdmChannelRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientSecret")
    public String clientSecret;
    public UpdateAdmChannelRequestBodyAdmChannelRequest withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UpdateAdmChannelRequestBodyAdmChannelRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}