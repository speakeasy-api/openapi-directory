package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateCaCertificateParams
 * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
**/
public class UpdateCaCertificateParams {
    @JsonProperty("action")
    public CaCertificateUpdateActionEnum action;
    public UpdateCaCertificateParams withAction(CaCertificateUpdateActionEnum action) {
        this.action = action;
        return this;
    }
}