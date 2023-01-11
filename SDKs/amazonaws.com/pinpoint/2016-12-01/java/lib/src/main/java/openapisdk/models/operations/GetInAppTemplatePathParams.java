package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInAppTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public GetInAppTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}