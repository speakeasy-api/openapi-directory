package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVoiceTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public DeleteVoiceTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}