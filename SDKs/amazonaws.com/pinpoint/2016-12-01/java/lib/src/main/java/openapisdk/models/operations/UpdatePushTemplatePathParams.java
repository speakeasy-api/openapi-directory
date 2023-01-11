package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePushTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public UpdatePushTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}