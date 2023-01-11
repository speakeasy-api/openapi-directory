package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceDetailsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public DeviceDetailsOutput withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceSecret")
    public String deviceSecret;
    public DeviceDetailsOutput withDeviceSecret(String deviceSecret) {
        this.deviceSecret = deviceSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formFactor")
    public DeviceDetailsFormFactorEnum formFactor;
    public DeviceDetailsOutput withFormFactor(DeviceDetailsFormFactorEnum formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeviceDetailsOutput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public DeviceDetailsOutput withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public DeviceDetailsPlatformEnum platform;
    public DeviceDetailsOutput withPlatform(DeviceDetailsPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("push.recipient")
    public RecipientOutput pushRecipient;
    public DeviceDetailsOutput withPushRecipient(RecipientOutput pushRecipient) {
        this.pushRecipient = pushRecipient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("push.state")
    public DeviceDetailsPushStateEnum pushState;
    public DeviceDetailsOutput withPushState(DeviceDetailsPushStateEnum pushState) {
        this.pushState = pushState;
        return this;
    }
}