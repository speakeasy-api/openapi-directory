package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomVerificationEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TemplateName")
    public String templateName;
    public UpdateCustomVerificationEmailTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}