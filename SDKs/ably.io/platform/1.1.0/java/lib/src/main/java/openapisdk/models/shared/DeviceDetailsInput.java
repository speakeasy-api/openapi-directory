package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class DeviceDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
@SpeakeasyMetadata("form:name=clientId")
    public String clientId;
    public DeviceDetailsInput withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceSecret")
@SpeakeasyMetadata("form:name=deviceSecret")
    public String deviceSecret;
    public DeviceDetailsInput withDeviceSecret(String deviceSecret) {
        this.deviceSecret = deviceSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formFactor")
@SpeakeasyMetadata("form:name=formFactor")
    public DeviceDetailsFormFactorEnum formFactor;
    public DeviceDetailsInput withFormFactor(DeviceDetailsFormFactorEnum formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
@SpeakeasyMetadata("form:name=id")
    public String id;
    public DeviceDetailsInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
@SpeakeasyMetadata("form:name=metadata")
    public java.util.Map<String, Object> metadata;
    public DeviceDetailsInput withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
@SpeakeasyMetadata("form:name=platform")
    public DeviceDetailsPlatformEnum platform;
    public DeviceDetailsInput withPlatform(DeviceDetailsPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("push.recipient")
@SpeakeasyMetadata("form:name=push.recipient")
    public Recipient pushRecipient;
    public DeviceDetailsInput withPushRecipient(Recipient pushRecipient) {
        this.pushRecipient = pushRecipient;
        return this;
    }
}