package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest
 * Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
**/
public class UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BundleId")
    public String bundleId;
    public UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public String certificate;
    public UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAuthenticationMethod")
    public String defaultAuthenticationMethod;
    public UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest withDefaultAuthenticationMethod(String defaultAuthenticationMethod) {
        this.defaultAuthenticationMethod = defaultAuthenticationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivateKey")
    public String privateKey;
    public UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TeamId")
    public String teamId;
    public UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenKey")
    public String tokenKey;
    public UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest withTokenKey(String tokenKey) {
        this.tokenKey = tokenKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenKeyId")
    public String tokenKeyId;
    public UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest withTokenKeyId(String tokenKeyId) {
        this.tokenKeyId = tokenKeyId;
        return this;
    }
}