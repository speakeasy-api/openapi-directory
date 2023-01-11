package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public GetEmailTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}