package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateProvisioningTemplateVersionRequestBody {
    @JsonProperty("templateBody")
    public String templateBody;
    public CreateProvisioningTemplateVersionRequestBody withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
}