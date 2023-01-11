package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomVerificationEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TemplateName")
    public String templateName;
    public DeleteCustomVerificationEmailTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}