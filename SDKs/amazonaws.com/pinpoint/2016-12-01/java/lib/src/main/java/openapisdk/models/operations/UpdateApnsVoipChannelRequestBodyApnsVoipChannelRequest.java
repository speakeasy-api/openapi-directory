package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
**/
public class UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BundleId")
    public String bundleId;
    public UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public String certificate;
    public UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAuthenticationMethod")
    public String defaultAuthenticationMethod;
    public UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest withDefaultAuthenticationMethod(String defaultAuthenticationMethod) {
        this.defaultAuthenticationMethod = defaultAuthenticationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivateKey")
    public String privateKey;
    public UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TeamId")
    public String teamId;
    public UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenKey")
    public String tokenKey;
    public UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest withTokenKey(String tokenKey) {
        this.tokenKey = tokenKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenKeyId")
    public String tokenKeyId;
    public UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest withTokenKeyId(String tokenKeyId) {
        this.tokenKeyId = tokenKeyId;
        return this;
    }
}