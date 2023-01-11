package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVoiceTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public UpdateVoiceTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}