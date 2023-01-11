package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProvisioningTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultVersionId")
    public Long defaultVersionId;
    public UpdateProvisioningTemplateRequestBody withDefaultVersionId(Long defaultVersionId) {
        this.defaultVersionId = defaultVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateProvisioningTemplateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateProvisioningTemplateRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preProvisioningHook")
    public UpdateProvisioningTemplateRequestBodyPreProvisioningHook preProvisioningHook;
    public UpdateProvisioningTemplateRequestBody withPreProvisioningHook(UpdateProvisioningTemplateRequestBodyPreProvisioningHook preProvisioningHook) {
        this.preProvisioningHook = preProvisioningHook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningRoleArn")
    public String provisioningRoleArn;
    public UpdateProvisioningTemplateRequestBody withProvisioningRoleArn(String provisioningRoleArn) {
        this.provisioningRoleArn = provisioningRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removePreProvisioningHook")
    public Boolean removePreProvisioningHook;
    public UpdateProvisioningTemplateRequestBody withRemovePreProvisioningHook(Boolean removePreProvisioningHook) {
        this.removePreProvisioningHook = removePreProvisioningHook;
        return this;
    }
}