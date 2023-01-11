package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateDeviceCertificateParams
 * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
**/
public class UpdateDeviceCertificateParams {
    @JsonProperty("action")
    public DeviceCertificateUpdateActionEnum action;
    public UpdateDeviceCertificateParams withAction(DeviceCertificateUpdateActionEnum action) {
        this.action = action;
        return this;
    }
}