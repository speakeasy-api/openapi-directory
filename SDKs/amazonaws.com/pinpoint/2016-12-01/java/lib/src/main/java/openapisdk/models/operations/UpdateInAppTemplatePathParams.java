package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInAppTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public UpdateInAppTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}