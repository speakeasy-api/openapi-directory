package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProvisioningTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateProvisioningTemplateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CreateProvisioningTemplateRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preProvisioningHook")
    public CreateProvisioningTemplateRequestBodyPreProvisioningHook preProvisioningHook;
    public CreateProvisioningTemplateRequestBody withPreProvisioningHook(CreateProvisioningTemplateRequestBodyPreProvisioningHook preProvisioningHook) {
        this.preProvisioningHook = preProvisioningHook;
        return this;
    }
    @JsonProperty("provisioningRoleArn")
    public String provisioningRoleArn;
    public CreateProvisioningTemplateRequestBody withProvisioningRoleArn(String provisioningRoleArn) {
        this.provisioningRoleArn = provisioningRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateProvisioningTemplateRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("templateBody")
    public String templateBody;
    public CreateProvisioningTemplateRequestBody withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public CreateProvisioningTemplateRequestBody withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}