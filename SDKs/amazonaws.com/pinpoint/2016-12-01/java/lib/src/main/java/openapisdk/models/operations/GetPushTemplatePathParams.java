package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPushTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public GetPushTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}