package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSmsTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public GetSmsTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}