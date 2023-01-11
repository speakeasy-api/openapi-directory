package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TemplateName")
    public String templateName;
    public UpdateEmailTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}