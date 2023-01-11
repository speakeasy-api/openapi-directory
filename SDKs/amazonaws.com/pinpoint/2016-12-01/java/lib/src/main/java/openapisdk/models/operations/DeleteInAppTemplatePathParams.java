package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInAppTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public DeleteInAppTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}