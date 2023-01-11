package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecipientOutput
 * Push recipient details for a device.
**/
public class RecipientOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceToken")
    public String deviceToken;
    public RecipientOutput withDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationToken")
    public String registrationToken;
    public RecipientOutput withRegistrationToken(String registrationToken) {
        this.registrationToken = registrationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transportType")
    public RecipientTransportTypeEnum transportType;
    public RecipientOutput withTransportType(RecipientTransportTypeEnum transportType) {
        this.transportType = transportType;
        return this;
    }
}