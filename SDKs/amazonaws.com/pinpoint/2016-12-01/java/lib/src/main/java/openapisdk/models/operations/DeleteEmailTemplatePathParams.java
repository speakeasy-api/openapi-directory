package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public DeleteEmailTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}