package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningHook
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
public class ProvisioningHook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadVersion")
    public String payloadVersion;
    public ProvisioningHook withPayloadVersion(String payloadVersion) {
        this.payloadVersion = payloadVersion;
        return this;
    }
    @JsonProperty("targetArn")
    public String targetArn;
    public ProvisioningHook withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}