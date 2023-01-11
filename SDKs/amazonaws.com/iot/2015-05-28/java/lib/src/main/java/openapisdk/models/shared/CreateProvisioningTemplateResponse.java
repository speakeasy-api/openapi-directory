package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProvisioningTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultVersionId")
    public Long defaultVersionId;
    public CreateProvisioningTemplateResponse withDefaultVersionId(Long defaultVersionId) {
        this.defaultVersionId = defaultVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateArn")
    public String templateArn;
    public CreateProvisioningTemplateResponse withTemplateArn(String templateArn) {
        this.templateArn = templateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateName")
    public String templateName;
    public CreateProvisioningTemplateResponse withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}