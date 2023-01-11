package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppPatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apnsCertificate")
    public String apnsCertificate;
    public AppPatch withApnsCertificate(String apnsCertificate) {
        this.apnsCertificate = apnsCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apnsPrivateKey")
    public String apnsPrivateKey;
    public AppPatch withApnsPrivateKey(String apnsPrivateKey) {
        this.apnsPrivateKey = apnsPrivateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apnsUseSandboxEndpoint")
    public Boolean apnsUseSandboxEndpoint;
    public AppPatch withApnsUseSandboxEndpoint(Boolean apnsUseSandboxEndpoint) {
        this.apnsUseSandboxEndpoint = apnsUseSandboxEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcmKey")
    public String fcmKey;
    public AppPatch withFcmKey(String fcmKey) {
        this.fcmKey = fcmKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AppPatch withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AppPatchStatusEnum status;
    public AppPatch withStatus(AppPatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsOnly")
    public Boolean tlsOnly;
    public AppPatch withTlsOnly(Boolean tlsOnly) {
        this.tlsOnly = tlsOnly;
        return this;
    }
}