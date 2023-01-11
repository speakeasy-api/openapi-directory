package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppPost {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apnsCertificate")
    public String apnsCertificate;
    public AppPost withApnsCertificate(String apnsCertificate) {
        this.apnsCertificate = apnsCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apnsPrivateKey")
    public String apnsPrivateKey;
    public AppPost withApnsPrivateKey(String apnsPrivateKey) {
        this.apnsPrivateKey = apnsPrivateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apnsUseSandboxEndpoint")
    public Boolean apnsUseSandboxEndpoint;
    public AppPost withApnsUseSandboxEndpoint(Boolean apnsUseSandboxEndpoint) {
        this.apnsUseSandboxEndpoint = apnsUseSandboxEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcmKey")
    public String fcmKey;
    public AppPost withFcmKey(String fcmKey) {
        this.fcmKey = fcmKey;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AppPost withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AppPostStatusEnum status;
    public AppPost withStatus(AppPostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsOnly")
    public Boolean tlsOnly;
    public AppPost withTlsOnly(Boolean tlsOnly) {
        this.tlsOnly = tlsOnly;
        return this;
    }
}