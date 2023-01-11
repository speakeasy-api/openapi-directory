package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateProvisioningTemplateRequestBodyPreProvisioningHook
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
public class UpdateProvisioningTemplateRequestBodyPreProvisioningHook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadVersion")
    public String payloadVersion;
    public UpdateProvisioningTemplateRequestBodyPreProvisioningHook withPayloadVersion(String payloadVersion) {
        this.payloadVersion = payloadVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetArn")
    public String targetArn;
    public UpdateProvisioningTemplateRequestBodyPreProvisioningHook withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}