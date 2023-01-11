package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVoiceTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public GetVoiceTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}