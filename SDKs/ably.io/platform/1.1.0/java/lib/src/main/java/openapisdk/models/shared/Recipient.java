package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * Recipient
 * Push recipient details for a device.
**/
public class Recipient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
@SpeakeasyMetadata("form:name=clientId")
    public String clientId;
    public Recipient withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
@SpeakeasyMetadata("form:name=deviceId")
    public String deviceId;
    public Recipient withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceToken")
@SpeakeasyMetadata("form:name=deviceToken")
    public String deviceToken;
    public Recipient withDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationToken")
@SpeakeasyMetadata("form:name=registrationToken")
    public String registrationToken;
    public Recipient withRegistrationToken(String registrationToken) {
        this.registrationToken = registrationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transportType")
@SpeakeasyMetadata("form:name=transportType")
    public RecipientTransportTypeEnum transportType;
    public Recipient withTransportType(RecipientTransportTypeEnum transportType) {
        this.transportType = transportType;
        return this;
    }
}